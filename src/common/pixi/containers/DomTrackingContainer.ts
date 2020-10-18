import memoizeOne from 'memoize-one';
import { Container, Graphics } from 'pixi.js';
import { PixiAppUpdateManager } from '../PixiAppUpdateManager';

export interface DomTrackingContainerProps {
    highlight?: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
}

export class DomTrackingContainer<P extends DomTrackingContainerProps> extends Container {
    private dirty = false;

    public constructor(protected props: P) {
        super();
        this.assignProps = memoizeOne(this.assignProps);
        this.layout();
        this.tick = this.tick.bind(this);
        PixiAppUpdateManager.addUpdateListener(this.tick);
    }

    public setProps<K extends keyof P>(props: Pick<P, K>): void {
        const prevProps = this.props;
        this.props = this.assignProps(prevProps, props);
        if (this.shouldContainerUpdate(prevProps)) {
            this.dirty = true;
        }
    }

    public tick(delta: number): void {
        if (this.dirty) {
            this.clear();
            this.layout();
            this.dirty = false;
        }
    }

    public clear(): void {
        this.removeChildren();
    }

    public layout(): void {
        const { highlight = false, x, y, width, height } = this.props;
        this.position.set(x, y);
        if (highlight) {
            const border = new Graphics();
            border.lineStyle(3, 0xff0000);
            border.beginFill(0xff0000, 0.25);
            border.drawRect(x + 1.5, y + 1.5, width - 3, height - 3);
            border.endFill();
            this.addChild(border);
        }
    }

    public destroy(): void {}

    protected shouldContainerUpdate(prevProps: Readonly<P>): boolean {
        return this.props !== prevProps;
    }

    private assignProps<K extends keyof P>(props: P, newProps: Pick<P, K>): P {
        return { ...props, ...newProps };
    }
}

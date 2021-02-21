import { Container } from 'pixi.js';
import { memoize } from '../../functions';
import { ContainerDestroyOptions } from '../../types';
import { PixiAppUpdateManager } from '../PixiAppUpdateManager';

export abstract class LayoutContainer<P = {}> extends Container {
    protected dirty = false;

    public constructor(protected props?: P) {
        super();
        this.assignProps = memoize(this.assignProps);
        this.tick = this.tick.bind(this);
        PixiAppUpdateManager.addUpdateListener(this.tick);
        this.setProps(props);
    }

    public setProps<K extends keyof P>(props: Pick<P, K>): void {
        const prevProps = this.props;
        this.props = this.assignProps(prevProps, props);
        if (this.shouldContainerUpdate(prevProps)) {
            this.dirty = true;
        }
    }

    public clear(): void {
        this.removeChildren();
    }

    public destroy(options?: ContainerDestroyOptions) {
        PixiAppUpdateManager.removeUpdateListener(this.tick);
        super.destroy(options);
    }

    public abstract layout(): void;

    protected tick(delta: number): void {
        if (this.dirty) {
            this.clear();
            this.layout();
            this.dirty = false;
        }
    }

    protected shouldContainerUpdate(prevProps: Readonly<P>): boolean {
        return this.props !== prevProps;
    }

    protected assignProps<K extends keyof P>(props: P, newProps: Pick<P, K>): P {
        return { ...props, ...newProps };
    }
}

import { Graphics } from 'pixi.js';
import { LayoutContainer } from './LayoutContainer';

export interface DomTrackingContainerProps {
    highlight?: boolean;
    x: number;
    y: number;
    width: number;
    height: number;
}

export class DomTrackingContainer<P extends DomTrackingContainerProps> extends LayoutContainer<P> {
    public layout(): void {
        const { highlight = false, x, y, width, height } = this.props;
        this.position.set(x, y);
        if (highlight) {
            const border = new Graphics();
            border.lineStyle(3, 0x8bc34a);
            border.beginFill(0x8bc34a, 0.25);
            border.drawRect(1.5, 1.5, width - 3, height - 3);
            border.endFill();
            this.addChild(border);
        }
    }
}

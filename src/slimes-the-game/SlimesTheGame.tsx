import Application = PIXI.Application;
import { Component, createRef, h, VNode } from 'preact';
import './SlimesTheGame.scss';

export class SlimesTheGame extends Component {
    private elementRef = createRef<HTMLDivElement>();
    private app: Application;

    public render(): VNode {
        return <div id="SlimesTheGame" ref={this.elementRef} />;
    }

    public componentDidMount(): void {
        const element = this.elementRef.current;
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.app = new Application({ width, height });
        element.appendChild(this.app.view);
    }
}

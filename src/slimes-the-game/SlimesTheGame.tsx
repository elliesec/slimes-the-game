import Application = PIXI.Application;
import React, { Component, createRef, ReactNode } from 'react';
import './SlimesTheGame.scss';

export class SlimesTheGame extends Component {
    private elementRef = createRef<HTMLDivElement>();
    private app: Application;

    public render(): ReactNode {
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

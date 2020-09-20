import { Application } from 'pixi.js';
import React, { Component, createRef, ReactElement } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import './PixiAppComponent.scss';

export interface PixiAppComponentProps {
    width: number;
    height: number;
}

export class PixiAppComponentClass extends Component<PixiAppComponentProps, {}> {
    private readonly elementRef = createRef<HTMLDivElement>();
    private app: Application;

    public componentDidMount(): void {
        const element = this.elementRef.current;
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.app = new Application({ width, height, transparent: true });
        this.app.resizeTo = element;
        element.appendChild(this.app.view);
    }

    public componentDidUpdate(prevProps: Readonly<PixiAppComponentProps>): void {
        const { width, height } = this.props;
        if (this.elementRef.current && (width !== prevProps.width || height !== prevProps.height)) {
            this.onResize();
        }
    }

    public render(): ReactElement {
        return <div className="PixiAppComponent" ref={this.elementRef} />;
    }

    private onResize(): void {
        const element = this.elementRef.current;
        if (this.app.resizeTo !== element) {
            this.app.resizeTo = element;
        }
    }
}

export const PixiAppComponent = withResizeDetector(PixiAppComponentClass);

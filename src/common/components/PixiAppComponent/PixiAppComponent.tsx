import React, { createRef, PureComponent, ReactElement } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import { PixiApp } from '../../pixi/PixiApp';
import { PixiAppView } from '../PixiAppView/PixiAppView';
import './PixiAppComponent.scss';

export interface PixiAppComponentProps {
    width: number;
    height: number;
    view: typeof PixiAppView;
}

export class PixiAppComponentClass extends PureComponent<PixiAppComponentProps, {}> {
    private readonly elementRef = createRef<HTMLDivElement>();
    private app: PixiApp;

    public componentDidMount(): void {
        const element = this.elementRef.current;
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.app = new PixiApp({ width, height, transparent: true });
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
        const View = this.props.view;
        return (
            <div className="PixiAppComponent" ref={this.elementRef}>
                <View app={this.app} />
            </div>
        );
    }

    private onResize(): void {
        const element = this.elementRef.current;
        if (this.app.resizeTo !== element) {
            this.app.resizeTo = element;
        }
    }
}

export const PixiAppComponent = withResizeDetector(PixiAppComponentClass);

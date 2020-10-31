import { IPointData, ISize } from 'pixi.js';
import React, { createRef, PureComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import { Dispatch } from 'redux';
import { DefaultView } from '../../../slimes-the-game/components/views/DefaultView/DefaultView';
import { DressingRoomView } from '../../../slimes-the-game/components/views/DressingRoomView/DressingRoomView';
import { State } from '../../../slimes-the-game/redux/store';
import { Callback } from '../../functions';
import { PixiApp } from '../../pixi/PixiApp';
import { PixiAppUpdateManager } from '../../pixi/PixiAppUpdateManager';
import { appSetPixiApp, appSetPosition } from '../../redux/app/appActions';
import { getCurrentView } from '../../redux/app/appSelectors';
import { AppView } from '../../redux/app/appState';
import { PixiAppView } from '../PixiAppView/PixiAppView';
import './PixiAppComponent.scss';

export interface PixiAppComponentProps extends ISize {
    view: typeof PixiAppView;
    onPixiAppSet: Callback<PixiApp>;
    onAppResize: Callback<IPointData>;
}

export class PixiAppComponentClass extends PureComponent<PixiAppComponentProps> {
    private readonly elementRef = createRef<HTMLDivElement>();
    private app: PixiApp;

    public componentDidMount(): void {
        const element = this.elementRef.current;
        const width = element.clientWidth;
        const height = element.clientHeight;
        this.app = new PixiApp({ width, height, transparent: true });
        this.app.view.id = 'pixi-app';
        this.onResize();
        element.appendChild(this.app.view);
        this.props.onPixiAppSet(this.app);
        this.app.ticker.add((delta) => PixiAppUpdateManager.updateApp(delta));
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
        const { x, y } = element.getBoundingClientRect();
        this.props.onAppResize({ x, y });
    }
}

const viewMapping: Record<AppView, typeof PixiAppView> = {
    [AppView.DEFAULT]: DefaultView,
    [AppView.DRESSING_ROOM]: DressingRoomView,
};

function mapStateToProps(state: State): Partial<PixiAppComponentProps> {
    return {
        view: viewMapping[getCurrentView(state)],
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<PixiAppComponentProps> {
    return {
        onPixiAppSet(app: PixiApp): void {
            dispatch(appSetPixiApp(app));
        },
        onAppResize(position: IPointData): void {
            dispatch(appSetPosition(position));
        },
    };
}

export const PixiAppComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(withResizeDetector(PixiAppComponentClass));

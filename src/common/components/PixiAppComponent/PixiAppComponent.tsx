import { IPointData, ISize } from 'pixi.js';
import React, {
    createRef,
    NamedExoticComponent,
    PureComponent,
    ReactElement,
    ReactNode,
} from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import { Dispatch } from 'redux';
import { FadeOut } from '../../../slimes-the-game/components/FadeOut/FadeOut';
import { DefaultView } from '../../../slimes-the-game/components/views/DefaultView/DefaultView';
import { DressingRoomView } from '../../../slimes-the-game/components/views/DressingRoomView/DressingRoomView';
import { MainMenuView } from '../../../slimes-the-game/components/views/MainMenuView/MainMenuView';
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
    children: ReactNode;
    view: typeof PixiAppView;
    onPixiAppSet: Callback<PixiApp>;
    onAppResize: Callback<IPointData>;
}

export class PixiAppComponentClass extends PureComponent<PixiAppComponentProps> {
    public static ROOT_ID = 'pixi-app-root';

    private readonly pixiStageRef = createRef<HTMLDivElement>();
    private app: PixiApp;

    public componentDidMount(): void {
        const element = this.pixiStageRef.current;
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
        if (
            this.pixiStageRef.current &&
            (width !== prevProps.width || height !== prevProps.height)
        ) {
            this.onResize();
        }
    }

    public render(): ReactElement {
        const View = this.props.view;
        return (
            <div id={PixiAppComponentClass.ROOT_ID} className="PixiAppComponent">
                <View app={this.app} />
                <div className="pixi-app-stage" ref={this.pixiStageRef} />
                {this.props.children}
                <FadeOut />
            </div>
        );
    }

    private onResize(): void {
        const element = this.pixiStageRef.current;
        if (this.app.resizeTo !== element) {
            this.app.resizeTo = element;
        }
        const { x, y } = element.getBoundingClientRect();
        this.props.onAppResize({ x, y });
    }
}

const viewMapping: Record<AppView, typeof PixiAppView> = {
    [AppView.MAIN_MENU]: MainMenuView,
    [AppView.DEFAULT]: DefaultView,
    [AppView.DRESSING_ROOM]: DressingRoomView,
};

function mapStateToProps(state: State): Pick<PixiAppComponentProps, 'view'> {
    return {
        view: viewMapping[getCurrentView(state)],
    };
}

function mapDispatchToProps(
    dispatch: Dispatch
): Pick<PixiAppComponentProps, 'onPixiAppSet' | 'onAppResize'> {
    return {
        onPixiAppSet(app: PixiApp): void {
            dispatch(appSetPixiApp(app));
        },
        onAppResize(position: IPointData): void {
            dispatch(appSetPosition(position));
        },
    };
}

const PixiAppComponentWithResizeDetector: NamedExoticComponent = withResizeDetector(
    PixiAppComponentClass,
    {}
);

export const PixiAppComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PixiAppComponentWithResizeDetector);

import { IPointData, ISize } from 'pixi.js';
import { createRef, PureComponent } from 'react';
import { WithAppPositionProps } from '../../hocs/withAppPosition';
import {
    DomTrackingContainer,
    DomTrackingContainerProps,
} from '../../pixi/containers/DomTrackingContainer';
import { PixiApp } from '../../pixi/PixiApp';

export interface ContainerLinkedComponentProps extends WithAppPositionProps, ISize {
    app: PixiApp;
}

export interface ContainerLinkedComponentState {
    containerAdded: boolean;
}

export abstract class ContainerLinkedComponent<
    C extends DomTrackingContainerProps = DomTrackingContainerProps,
    R extends HTMLElement = HTMLDivElement,
    P extends ContainerLinkedComponentProps = ContainerLinkedComponentProps,
    S extends ContainerLinkedComponentState = ContainerLinkedComponentState
> extends PureComponent<P, S> {
    protected container: DomTrackingContainer<C>;
    protected ref = createRef<R>();

    public constructor(props: P) {
        super(props);
        this.state = this.getInitialState({ containerAdded: false });
    }

    public componentDidMount(): void {
        this.container = this.createContainer(this.props);
        this.addContainerToApp();
    }

    public componentDidUpdate(prevProps: Readonly<P>): void {
        const { appPosition, width, height } = this.props;
        if (
            width !== prevProps.width ||
            height !== prevProps.height ||
            appPosition !== prevProps.appPosition
        ) {
            this.container.setProps(this.getContainerProps());
        }
        this.addContainerToApp();
    }

    public componentWillUnmount() {
        this.container.destroy();
    }

    protected getContainerProps(): IPointData & ISize {
        const currentRef = this.ref.current;
        if (!currentRef) {
            return { x: 0, y: 0, width: this.props.width, height: this.props.height };
        }
        const appPosition = this.props.appPosition;
        const { x, y, width, height } = currentRef.getBoundingClientRect();
        return { x: x - appPosition.x, y: y - appPosition.y, width, height };
    }

    protected addContainerToApp(): void {
        if (!this.state.containerAdded && this.props.app) {
            this.props.app.stage.addChild(this.container);
            this.setState({ containerAdded: true });
        }
    }

    protected abstract createContainer(props: P): DomTrackingContainer<C>;

    protected abstract getInitialState(parentState: ContainerLinkedComponentState): S;
}

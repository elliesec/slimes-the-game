import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { withResizeDetector } from 'react-resize-detector';
import {
    ContainerLinkedComponent,
    ContainerLinkedComponentProps,
    ContainerLinkedComponentState,
} from '../../../../common/components/ContainerLinkedComponent/ContainerLinkedComponent';
import { withAppPosition } from '../../../../common/hocs/withAppPosition';
import { withPixiApp } from '../../../../common/hocs/withPixiApp';
import { State } from '../../../redux/store';
import { MapWindowContainer, MapWindowContainerProps } from './MapWindowContainer';

export interface MapWindowProps extends ContainerLinkedComponentProps {
    position: [number, number];
}

export class MapWindowClass extends ContainerLinkedComponent<MapWindowContainerProps,
    HTMLDivElement,
    MapWindowProps> {
    public render(): ReactElement {
        return (
            <div ref={this.ref} className="Window MapWindow">
                Map Window
            </div>
        );
    }

    protected getInitialState(
        parentState: ContainerLinkedComponentState,
    ): ContainerLinkedComponentState {
        return parentState;
    }

    protected createContainer(props: MapWindowProps): MapWindowContainer {
        const { x, y, width, height } = this.ref.current.getBoundingClientRect();
        return new MapWindowContainer({ x, y, width, height, position: props.position });
    }

    protected getContainerProps(): Partial<MapWindowProps> {
        return { ...super.getContainerProps(), position: this.props.position };
    }
}

function mapStateToProps(state: State): Pick<MapWindowProps, 'position'> {
    return { position: state.location.position };
}

export const MapWindow = connect(mapStateToProps)(
    withResizeDetector(withAppPosition(withPixiApp(MapWindowClass)), {}),
);

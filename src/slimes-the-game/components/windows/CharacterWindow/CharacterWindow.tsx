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
import {
    DomTrackingContainer,
    DomTrackingContainerProps,
} from '../../../../common/pixi/containers/DomTrackingContainer';
import { getLocationBackground } from '../../../../common/redux/location/locationSelectors';
import { CharacterBackgrounds } from '../../../assets/backgrounds/backgrounds';
import { State } from '../../../redux/store';
import { CharacterWindowContainer } from './CharacterWindowContainer';

export interface CharacterWindowProps extends ContainerLinkedComponentProps {}

export class CharacterWindowClass extends ContainerLinkedComponent {
    public render(): ReactElement {
        return <div ref={this.ref} className="Window CharacterWindow" style={this.getStyles()} />;
    }

    protected getInitialState(
        parentState: ContainerLinkedComponentState
    ): ContainerLinkedComponentState {
        return parentState;
    }

    protected createContainer(
        props: ContainerLinkedComponentProps
    ): DomTrackingContainer<DomTrackingContainerProps> {
        const { x, y, width, height } = this.ref.current.getBoundingClientRect();
        return new CharacterWindowContainer({
            highlight: false,
            x,
            y,
            width,
            height,
        });
    }
}

function mapStateToProps(state: State): Partial<CharacterWindowProps> {
    const background = getLocationBackground(state);
    return {
        background: CharacterBackgrounds[background],
    };
}

export const CharacterWindow = connect(mapStateToProps)(
    withResizeDetector(withAppPosition(withPixiApp(CharacterWindowClass)))
);

import React, { ReactElement } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import { WindowBackground } from '../../../../common/components/BackgroundComponent/WindowBackground';
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
import { WindowType } from '../../../enums';
import { CharacterWindowContainer } from './CharacterWindowContainer';

export interface CharacterWindowProps extends ContainerLinkedComponentProps {}

export class CharacterWindowClass extends ContainerLinkedComponent {
    public render(): ReactElement {
        return (
            <div ref={this.ref} className="Window CharacterWindow">
                <WindowBackground windowType={WindowType.CHARACTER} />
            </div>
        );
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

export const CharacterWindow = withResizeDetector(
    withAppPosition(withPixiApp(CharacterWindowClass)),
    {}
);

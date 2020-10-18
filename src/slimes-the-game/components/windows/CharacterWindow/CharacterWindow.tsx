import React, { ReactElement } from 'react';
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
import { CharacterContainer } from '../../../containers/CharacterContainer';

export interface CharacterWindowProps extends ContainerLinkedComponentProps {}

export class CharacterWindowClass extends ContainerLinkedComponent {
    public render(): ReactElement {
        return (
            <div ref={this.ref} className="Window CharacterWindow">
                Character Window
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
        return new CharacterContainer({
            x,
            y,
            width,
            height,
        });
    }
}

export const CharacterWindow = withResizeDetector(
    withAppPosition(withPixiApp(CharacterWindowClass))
);

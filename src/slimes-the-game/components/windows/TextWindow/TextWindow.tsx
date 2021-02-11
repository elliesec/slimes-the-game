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
import './TextWindow.scss';

export interface TextWindowProps extends ContainerLinkedComponentProps {}

export class TextWindowClass extends ContainerLinkedComponent {
    public render(): ReactElement {
        return (
            <div ref={this.ref} className="Window TextWindow">
                <WindowBackground windowType={WindowType.TEXT}>
                    <div className="screen">
                        <div className="content">
                            <h2>Text Window</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis
                                neque, egestas ornare nulla non, cursus sollicitudin nisi. Proin
                                vitae ex bibendum, vestibulum libero et, pretium lectus. Nulla
                                euismod leo blandit, commodo magna commodo, molestie felis. Cras
                                libero dolor, tempor at ipsum id, aliquet interdum sapien. Etiam non
                                purus ornare, efficitur dolor non, mollis arcu. Ut et finibus nisl,
                                et cursus orci. Vestibulum in velit id ligula elementum vulputate in
                                quis quam. Donec tincidunt et nunc ut accumsan. Vivamus laoreet
                                tellus sagittis massa mollis, quis placerat mauris varius. Donec
                                maximus sodales velit aliquet varius.
                            </p>
                            <p>
                                Mauris euismod ultrices lacus, ut consectetur massa congue quis. In
                                consequat sem ac finibus condimentum. Vestibulum ante ipsum primis
                                in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed
                                nibh scelerisque, placerat lacus at, dignissim justo. Cras et lacus
                                non velit congue aliquet non nec elit. Mauris semper auctor feugiat.
                                Duis at tincidunt nulla. Duis eget ligula vehicula, tempus mauris
                                pellentesque, mollis libero. Fusce efficitur venenatis magna eu
                                finibus.
                            </p>
                        </div>
                    </div>
                </WindowBackground>
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
        return new DomTrackingContainer({
            highlight: false,
            x,
            y,
            width,
            height,
        });
    }
}

export const TextWindow = withResizeDetector(withAppPosition(withPixiApp(TextWindowClass)), {});

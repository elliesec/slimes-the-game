import React, { Component, ReactNode } from 'react';
import { PixiAppComponent } from '../common/components/PixiAppComponent/PixiAppComponent';
import './SlimesTheGame.scss';

export class SlimesTheGame extends Component {
    public render(): ReactNode {
        return (
            <div id="SlimesTheGame">
                <PixiAppComponent />
            </div>
        );
    }
}

import React, { Component, ReactNode } from 'react';
import { PixiAppComponent } from '../common/components/PixiAppComponent/PixiAppComponent';
import './SlimesTheGame.scss';
import { DefaultView } from './components/views/DefaultView/DefaultView';

export class SlimesTheGame extends Component {
    public render(): ReactNode {
        return (
            <div id="SlimesTheGame">
                <PixiAppComponent view={DefaultView} />
            </div>
        );
    }
}

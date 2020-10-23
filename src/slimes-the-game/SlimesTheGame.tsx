import React, { Component, ReactNode } from 'react';
import { PixiAppComponent } from '../common/components/PixiAppComponent/PixiAppComponent';
import { log } from '../common/util/Log';
import { GAME_NAME } from './config/config';
import { loadFamilies, loadItems } from './items/itemLoader';
import './SlimesTheGame.scss';

export class SlimesTheGame extends Component {
    public constructor(props: {}) {
        super(props);
        loadFamilies();
        loadItems();
    }

    public render(): ReactNode {
        return (
            <div id="SlimesTheGame">
                <PixiAppComponent />
            </div>
        );
    }
}

log.info(`Welcome to ${GAME_NAME}`);

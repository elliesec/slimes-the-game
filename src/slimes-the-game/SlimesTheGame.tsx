import React, { Component, ReactNode } from 'react';
import { PixiAppComponent } from '../common/components/PixiAppComponent/PixiAppComponent';
import { log } from '../common/util/Log';
import { CheatMenu } from './components/CheatMenu/CheatMenu';
import { GAME_NAME } from './config/config';
import { loadCharacters, loadPlayer } from './data/character/characterLoader';
import { loadFamilies, loadItems } from './data/items/itemLoader';
import './SlimesTheGame.scss';

export class SlimesTheGame extends Component {
    public constructor(props: {}) {
        super(props);
        loadFamilies();
        loadItems();
        loadPlayer();
        loadCharacters();
    }

    public render(): ReactNode {
        return (
            <div id="SlimesTheGame">
                <PixiAppComponent>
                    <CheatMenu />
                </PixiAppComponent>
            </div>
        );
    }
}

log.info(`Welcome to ${GAME_NAME}`);

import React, { CSSProperties, ReactElement } from 'react';
import {
    PixiAppView,
    PixiAppViewProps,
} from '../../../../common/components/PixiAppView/PixiAppView';
import { preloadImages } from '../../../../common/util/imageUtils';
import { GAME_NAME } from '../../../config/config';
import { LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { MainMenuButtons } from './MainMenuButtons';
import './MainMenuView.scss';

const mainMenuBackground = require('./main-menu-bg.png');

export interface MainMenuViewProps extends PixiAppViewProps {
    onNewGame(): void;

    onLoadGame(): void;

    onSettings(): void;
}

export class MainMenuView extends PixiAppView<MainMenuViewProps> {
    private observable = preloadImages(mainMenuBackground);

    public render(): ReactElement {
        return (
            <LoadingScreen observable={this.observable}>
                <div className="AppView MainMenuView" style={this.getBackgroundStyle()}>
                    <div className="menu-backdrop">
                        <h1>{GAME_NAME}</h1>
                        <MainMenuButtons />
                    </div>
                </div>
            </LoadingScreen>
        );
    }

    private getBackgroundStyle(): CSSProperties {
        return {
            backgroundImage: `url(${mainMenuBackground})`,
        };
    }
}

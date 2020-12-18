import React, { CSSProperties, ReactElement } from 'react';
import { Observable } from 'rxjs';
import {
    PixiAppView,
    PixiAppViewProps,
} from '../../../../common/components/PixiAppView/PixiAppView';
import { log } from '../../../../common/util/Log';
import { GAME_NAME } from '../../../config/config';
import { LoadingProgress, LoadingScreen } from '../../LoadingScreen/LoadingScreen';
import { MainMenuButtons } from './MainMenuButtons';
import './MainMenuView.scss';

const mainMenuBackground = require('./main-menu-bg.png');

export interface MainMenuViewProps extends PixiAppViewProps {
    onNewGame(): void;
    onLoadGame(): void;
    onSettings(): void;
}

export class MainMenuView extends PixiAppView<MainMenuViewProps> {
    private observable = new Observable<LoadingProgress>((subscriber) => {
        setTimeout(() => {
            log.debug('Completing observable');
            subscriber.complete();
        }, 3000);
    });

    public componentDidMount() {}

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

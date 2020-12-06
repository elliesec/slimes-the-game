import React, { CSSProperties, ReactElement } from 'react';
import { ButtonGrid } from '../../../../common/components/ButtonGrid/ButtonGrid';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import { GAME_NAME } from '../../../config/config';
import { MainMenuButton } from './MainMenuButton';
import './MainMenuView.scss';

const mainMenuBackground = require('../../../assets/image-placeholder.png');

export class MainMenuView extends PixiAppView {
    public render(): ReactElement {
        return (
            <div className="AppView MainMenuView" style={this.getBackgroundStyle()}>
                <div className="menu-backdrop">
                    <h1>{GAME_NAME}</h1>
                    <ButtonGrid rows={2} columns={1}>
                        <MainMenuButton row={0} column={0}>
                            New Game
                        </MainMenuButton>
                        <MainMenuButton row={1} column={0}>
                            Load Game
                        </MainMenuButton>
                    </ButtonGrid>
                </div>
            </div>
        );
    }

    private getBackgroundStyle(): CSSProperties {
        return {
            backgroundImage: `url(${mainMenuBackground})`,
        };
    }
}

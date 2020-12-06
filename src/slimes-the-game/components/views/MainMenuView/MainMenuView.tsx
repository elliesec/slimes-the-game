import React, { CSSProperties, ReactElement } from 'react';
import { PixiAppView } from '../../../../common/components/PixiAppView/PixiAppView';
import './MainMenuView.scss';

const mainMenuBackground = require('./main-menu.png');

export class MainMenuView extends PixiAppView {
    public render(): ReactElement {
        return <div className="AppView MainMenuView" style={this.getBackgroundStyle()} />;
    }

    private getBackgroundStyle(): CSSProperties {
        return {
            backgroundImage: `url(${mainMenuBackground})`,
        };
    }
}

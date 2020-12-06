import { IPointData } from 'pixi.js';
import { PixiApp } from '../../pixi/PixiApp';

export enum AppView {
    MAIN_MENU = 'mainMenu',
    DEFAULT = 'default',
    DRESSING_ROOM = 'dressingRoom',
}

export interface AppState {
    view: AppView;
    pixiApp: PixiApp;
    position: IPointData;
}

export interface WithAppState {
    app: AppState;
}

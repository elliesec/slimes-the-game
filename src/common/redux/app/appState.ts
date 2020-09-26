import { IPointData } from 'pixi.js';
import { PixiApp } from '../../pixi/PixiApp';

export enum AppView {
    DEFAULT = 'default',
}

export interface AppState {
    view: AppView;
    pixiApp: PixiApp;
    position: IPointData;
}

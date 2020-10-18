import { IPointData } from 'pixi.js';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { PixiApp } from '../../pixi/PixiApp';
import { AppView } from './appState';

export enum AppAction {
    SET_VIEW = 'app/set-view',
    SET_PIXI_APP = 'app/set-pixi-app',
    SET_POSITION = 'app/set-position',
}

export function appSetView(view: AppView): PayloadAction<AppView> {
    return { type: AppAction.SET_VIEW, payload: view };
}

export function appSetPixiApp(app: PixiApp): PayloadAction<PixiApp> {
    return { type: AppAction.SET_PIXI_APP, payload: app };
}

export function appSetPosition(p: IPointData): PayloadAction<IPointData> {
    return { type: AppAction.SET_POSITION, payload: p };
}

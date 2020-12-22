import { IPointData } from 'pixi.js';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { State } from '../../../slimes-the-game/redux/store';
import { loadingScreenStyles } from '../../../slimes-the-game/styles/styles';
import { PixiApp } from '../../pixi/PixiApp';
import { AppView } from './appState';

export enum AppAction {
    SET_VIEW = 'app/set-view',
    SET_PIXI_APP = 'app/set-pixi-app',
    SET_POSITION = 'app/set-position',
    SET_FADE_OUT = 'app/set-fade-out',
}

function setFadeOut(fadeOut: boolean): PayloadAction<boolean> {
    return { type: AppAction.SET_FADE_OUT, payload: fadeOut };
}

function changeAppView(view: AppView): PayloadAction<AppView> {
    return { type: AppAction.SET_VIEW, payload: view };
}

export function appSetView(view: AppView): ThunkAction<void, State, void, AnyAction> {
    return (dispatch) => {
        dispatch(setFadeOut(true));
        setTimeout(() => {
            dispatch(changeAppView(view));
            dispatch(setFadeOut(false));
        }, loadingScreenStyles.fadeInMs);
    };
}

export function appSetPixiApp(app: PixiApp): PayloadAction<PixiApp> {
    return { type: AppAction.SET_PIXI_APP, payload: app };
}

export function appSetPosition(p: IPointData): PayloadAction<IPointData> {
    return { type: AppAction.SET_POSITION, payload: p };
}

import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { PixiApp } from '../../pixi/PixiApp';
import { AppAction } from './appActions';

const reducers: Record<string, Reducer<PixiApp>> = {
    [AppAction.SET_PIXI_APP]: setPixiAppReducer,
};

export function appPixiAppReducer(app: PixiApp = null, action: Action): PixiApp {
    const reducer = reducers[action.type];
    return reducer ? reducer(app, action) : app;
}

function setPixiAppReducer(view: PixiApp, action: PayloadAction<PixiApp>): PixiApp {
    return action.payload;
}

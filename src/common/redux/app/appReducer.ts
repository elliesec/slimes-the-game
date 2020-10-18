import { combineReducers } from 'redux';
import { appPixiAppReducer } from './appPixiAppReducer';
import { appPositionReducer } from './appPositionReducer';
import { AppState } from './appState';
import { appViewReducer } from './appViewReducer';

export const appReducer = combineReducers<AppState>({
    view: appViewReducer,
    pixiApp: appPixiAppReducer,
    position: appPositionReducer,
});

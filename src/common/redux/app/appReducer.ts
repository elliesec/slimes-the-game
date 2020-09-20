import { combineReducers } from 'redux';
import { AppState } from './appState';
import { appViewReducer } from './appViewReducer';

export const appReducer = combineReducers<AppState>({
    view: appViewReducer,
});

import { combineReducers } from 'redux';
import { configHotkeysReducer } from './configHotkeysReducer';
import { ConfigState } from './configState';

export const configReducer = combineReducers<ConfigState>({
    hotkeys: configHotkeysReducer,
});

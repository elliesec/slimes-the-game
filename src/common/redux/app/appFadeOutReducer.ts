import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../reduxUtils';
import { AppAction } from './appActions';

const setFadeOutReducer = produce((state: boolean, { payload }: PayloadAction<boolean>) => {
    if (typeof payload === 'boolean') {
        return payload;
    }
    return state;
}, false);

const reducers: Record<string, Reducer<boolean>> = {
    [AppAction.SET_FADE_OUT]: setFadeOutReducer,
};

export const appFadeOutReducer = produce((state: boolean, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, false);

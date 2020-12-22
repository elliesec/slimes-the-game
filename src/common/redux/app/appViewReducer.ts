import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppAction } from './appActions';
import { AppView } from './appState';

const reducers: Record<string, Reducer<AppView>> = {
    [AppAction.SET_VIEW]: setViewReducer,
};

export function appViewReducer(view = AppView.MAIN_MENU, action: Action): AppView {
    const reducer = reducers[action.type];
    return reducer ? reducer(view, action) : view;
}

function setViewReducer(view: AppView, action: PayloadAction<AppView>): AppView {
    return action.payload;
}

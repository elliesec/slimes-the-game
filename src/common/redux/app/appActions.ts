import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppView } from './appState';

export enum AppAction {
    SET_VIEW = 'app/set-view',
}

export function appSetView(view: AppView): PayloadAction<AppView> {
    return { type: AppAction.SET_VIEW, payload: view };
}

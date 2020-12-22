import { AppView, WithAppState } from './appState';

export function getCurrentView(state: WithAppState): AppView {
    return state.app.view;
}

export function getAppFadeOut(state: WithAppState): boolean {
    return state.app.fadeOut;
}

import { AppView, WithAppState } from './appState';

export function getCurrentView(state: WithAppState): AppView {
    return state.app.view;
}

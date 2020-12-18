import { ConfigHotkeysState, WithConfigState } from './configState';

export function getConfigHotkeysState(state: WithConfigState): ConfigHotkeysState {
    return state.config.hotkeys;
}

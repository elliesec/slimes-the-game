import produce from 'immer';
import { Action, Reducer } from 'redux';
import { Key } from 'ts-key-enum';
import { StringRecord } from '../../types';
import { PayloadAction } from '../reduxUtils';
import { ConfigAction, HotkeyPayload } from './configActions';
import { ConfigHotkeysState, Hotkey } from './configState';

const setHotkeyReducer = produce(
    (state: ConfigHotkeysState, { payload }: PayloadAction<HotkeyPayload>) => {
        const { hotkey, key } = payload;
        if (!state[hotkey].includes(key)) {
            state[hotkey].push(key);
        }
    },
    defaultConfigHotkeysState()
);

const removeHotkeyReducer = produce(
    (state: ConfigHotkeysState, { payload }: PayloadAction<HotkeyPayload>) => {
        const { hotkey, key } = payload;
        const index = state[hotkey].indexOf(key);
        if (index !== -1) {
            state[hotkey].splice(index, 1);
        }
    }
);

const reducers: StringRecord<Reducer<ConfigHotkeysState>> = {
    [ConfigAction.SET_HOTKEY]: setHotkeyReducer,
    [ConfigAction.REMOVE_HOTKEY]: removeHotkeyReducer,
};

export const configHotkeysReducer = produce((state: ConfigHotkeysState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, defaultConfigHotkeysState());

export function defaultConfigHotkeysState(): ConfigHotkeysState {
    return {
        [Hotkey.LEFT]: [Key.ArrowLeft],
        [Hotkey.RIGHT]: [Key.ArrowRight],
        [Hotkey.UP]: [Key.ArrowUp],
        [Hotkey.DOWN]: [Key.ArrowDown],
        [Hotkey.SELECT]: [Key.Enter, 'z'],
        [Hotkey.CANCEL]: [Key.Backspace, 'x'],
    };
}

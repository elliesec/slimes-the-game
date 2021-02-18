import { PayloadAction } from '../reduxUtils';
import { Hotkey } from './configState';

export enum ConfigAction {
    SET_HOTKEY = 'config/add-hotkey',
    REMOVE_HOTKEY = 'config/remove-hotkey',
}

export interface HotkeyPayload {
    hotkey: Hotkey;
    key: string;
}

export function configAddHotkey(hotkey: Hotkey, key: string): PayloadAction<HotkeyPayload> {
    return { type: ConfigAction.SET_HOTKEY, payload: { hotkey, key } };
}

export function configRemoveHotkey(hotkey: Hotkey, key: string): PayloadAction<HotkeyPayload> {
    return { type: ConfigAction.REMOVE_HOTKEY, payload: { hotkey, key } };
}

import { ConfigHotkeysState, Hotkey } from '../redux/config/configState';

export enum ArrowKey {
    LEFT = 'left',
    RIGHT = 'right',
    UP = 'up',
    DOWN = 'down',
}

export function isArrowKey(e: KeyboardEvent, hotkeys: ConfigHotkeysState): ArrowKey {
    if (hotkeys[Hotkey.LEFT].includes(e.key)) {
        return ArrowKey.LEFT;
    } else if (hotkeys[Hotkey.RIGHT].includes(e.key)) {
        return ArrowKey.RIGHT;
    } else if (hotkeys[Hotkey.UP].includes(e.key)) {
        return ArrowKey.UP;
    } else if (hotkeys[Hotkey.DOWN].includes(e.key)) {
        return ArrowKey.DOWN;
    }
    return null;
}

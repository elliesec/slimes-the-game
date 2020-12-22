export enum Hotkey {
    LEFT = 'left',
    RIGHT = 'right',
    UP = 'up',
    DOWN = 'down',
    SELECT = 'select',
    CANCEL = 'cancel',
}

export type ConfigHotkeysState = Record<Hotkey, string[]>;

export interface ConfigState {
    hotkeys: ConfigHotkeysState;
}

export interface WithConfigState {
    config: ConfigState;
}

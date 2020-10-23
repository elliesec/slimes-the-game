import { AppearanceSlot } from './AppearanceSlot';

export enum ItemFamilyType {
    PLAYER = 'Player',
}

export interface ItemFamily {
    type: ItemFamilyType;
    slots: AppearanceSlot[];
}

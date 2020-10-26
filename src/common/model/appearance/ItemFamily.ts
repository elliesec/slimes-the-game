import { AppearanceSlot } from './AppearanceSlot';

export enum ItemFamilyType {
    HUMAN = 'Human',
}

export interface ItemFamily {
    type: ItemFamilyType;
    slots: AppearanceSlot[];
}

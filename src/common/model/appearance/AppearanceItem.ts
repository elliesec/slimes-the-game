import { ItemFamilyType } from '../../../slimes-the-game/items/ItemFamily';
import { AppearanceSlotType } from './AppearanceSlot';

export interface AppearanceItem {
    name: string;
    slot: AppearanceSlotType;
    family: ItemFamilyType;
    assets: AppearanceAsset[];
}

export interface AppearanceAsset {
    name: string;
    url?: string;
}

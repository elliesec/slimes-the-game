import { ItemFamily } from '../../../slimes-the-game/items/ItemFamily';
import { AppearanceSlotType } from './AppearanceSlot';

export interface AppearanceItem {
    name: string;
    slot: AppearanceSlotType;
    family: ItemFamily;
    assets: AppearanceAsset[];
}

export interface AppearanceAsset {
    url?: string;
}

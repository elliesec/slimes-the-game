import { ItemFamilyType } from '../../../slimes-the-game/items/ItemFamily';
import { AppearanceSlotType } from './AppearanceSlot';

export interface AppearanceItemDefinition {
    family: ItemFamilyType;
    slot: AppearanceSlotType;
    name: string;
    assets: AppearanceAsset[];
}

export interface AppearanceItem extends AppearanceItemDefinition {
    id: string;
}

export interface AppearanceAsset {
    name: string;
    url?: string;
}

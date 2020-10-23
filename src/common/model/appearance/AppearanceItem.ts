import { AppearanceSlotType } from './AppearanceSlot';
import { ItemCategory } from './ItemCategory';
import { ItemFamilyType } from './ItemFamily';

export interface AppearanceItemDefinition {
    name: string;
    family: ItemFamilyType;
    slot: AppearanceSlotType;
    category: ItemCategory;
    assets: AppearanceAsset[];
}

export interface AppearanceItem extends AppearanceItemDefinition {
    id: string;
}

export interface AppearanceAsset {
    name: string;
    url?: string;
}

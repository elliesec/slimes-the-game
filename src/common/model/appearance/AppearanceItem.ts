import { AppearanceSlotType } from './AppearanceSlot';
import { ItemCategory } from './ItemCategory';
import { ItemFamilyType } from './ItemFamily';

export interface AppearanceItemDefinition {
    name: string;
    displayName: string;
    description?: string;
    family: ItemFamilyType;
    slot: AppearanceSlotType;
    category: ItemCategory;
    assets: AppearanceAsset[];
    priority: number;
}

export interface AppearanceItem extends AppearanceItemDefinition {
    id: string;
}

export interface AppearanceAsset {
    name: string;
    url?: string;
}

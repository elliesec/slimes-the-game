import { PartialRecord } from '../../types';
import { AppearanceSlotType } from '../appearance/AppearanceSlot';
import { ItemCategory } from '../appearance/ItemCategory';
import { ItemFamilyType } from '../appearance/ItemFamily';

export interface NormalizedCharacter {
    id: string;
    appearance: NormalizedCharacterAppearance;
}

export interface NormalizedCharacterAppearance {
    family: ItemFamilyType;
    categories: NormalizedCategoryMapping;
}

export type NormalizedSlotMapping = PartialRecord<AppearanceSlotType, string>;
export type NormalizedCategoryMapping = PartialRecord<ItemCategory, NormalizedSlotMapping>;

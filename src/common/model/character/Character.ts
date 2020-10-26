import { PartialRecord } from '../../types';
import { AppearanceItem } from '../appearance/AppearanceItem';
import { AppearanceSlotType } from '../appearance/AppearanceSlot';
import { ItemCategory } from '../appearance/ItemCategory';
import { ItemFamilyType } from '../appearance/ItemFamily';

export interface Character {
    id: string;
    appearance: CharacterAppearance;
}

export interface CharacterAppearance {
    family: ItemFamilyType;
    categories: CharacterCategoryMapping;
}

export type CharacterSlotMapping = PartialRecord<AppearanceSlotType, AppearanceItem>;
export type CharacterCategoryMapping = PartialRecord<ItemCategory, CharacterSlotMapping>;

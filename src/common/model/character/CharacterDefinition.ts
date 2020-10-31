import { PartialRecord } from '../../types';
import { AppearanceSlotType } from '../appearance/AppearanceSlot';
import { ItemCategory } from '../appearance/ItemCategory';
import { ItemFamilyType } from '../appearance/ItemFamily';

export interface CharacterDefinition {
    appearance: AppearanceDefinition;
}

export interface AppearanceDefinition {
    family: ItemFamilyType;
    categories: SerialisedCategoryMapping;
}

export type SerialisedSlotMapping = PartialRecord<AppearanceSlotType, string>;
export type SerialisedCategoryMapping = PartialRecord<ItemCategory, SerialisedSlotMapping>;

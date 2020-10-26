import { ItemFamilyType } from '../appearance/ItemFamily';

export interface CharacterDefinition {
    appearance: AppearanceDefinition;
}

export interface AppearanceDefinition {
    family: ItemFamilyType;
}

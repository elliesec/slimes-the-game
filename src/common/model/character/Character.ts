import { ItemFamilyType } from '../appearance/ItemFamily';

export interface Character {
    id: string;
    appearance: CharacterAppearance;
}

export interface CharacterAppearance {
    family: ItemFamilyType;
}

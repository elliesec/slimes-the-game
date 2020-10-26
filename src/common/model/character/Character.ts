import { CharacterAppearance } from '../appearance/CharacterAppearance';

export interface CharacterDefinition {
    appearance: CharacterAppearance;
}

export interface Character extends CharacterDefinition {
    id: string;
}

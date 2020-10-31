import { NormalizedCharacter } from '../../model/character/NormalizedCharacter';
import { StringRecord } from '../../types';

export type CharacterByIdState = StringRecord<NormalizedCharacter>;

export interface CharacterState {
    player: string;
    byId: CharacterByIdState;
}

export interface WithCharacterState {
    character: CharacterState;
}

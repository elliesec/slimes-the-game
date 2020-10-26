import { NormalizedCharacter } from '../../model/character/NormalizedCharacter';
import { NormalizedPlayer } from '../../model/character/Player';
import { StringRecord } from '../../types';

export type CharacterByIdState = StringRecord<NormalizedCharacter>;

export interface CharacterState {
    player: NormalizedPlayer;
    byId: CharacterByIdState;
}

export interface WithCharacterState {
    character: CharacterState;
}

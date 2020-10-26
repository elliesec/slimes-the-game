import { Character } from '../../model/character/Character';
import { Player } from '../../model/character/Player';
import { StringRecord } from '../../types';

export type CharacterByIdState = StringRecord<Character>;

export interface CharacterState {
    player: Player;
    byId: CharacterByIdState;
}

export interface WithCharacterState {
    character: CharacterState;
}

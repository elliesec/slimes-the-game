import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { Character, CharacterDefinition } from '../../model/character/Character';

export enum PlayerAction {
    REGISTER = 'player/register',
}

export function registerPlayer(def: CharacterDefinition): PayloadAction<Character> {
    return { type: PlayerAction.REGISTER, payload: { ...def, id: cuid() } };
}

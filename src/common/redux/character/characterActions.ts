import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { Character, CharacterDefinition } from '../../model/character/Character';

export enum CharacterAction {
    REGISTER_CHARACTER = 'character/register-character',
}

export function registerCharacter(def: CharacterDefinition): PayloadAction<Character> {
    return { type: CharacterAction.REGISTER_CHARACTER, payload: { ...def, id: cuid() } };
}

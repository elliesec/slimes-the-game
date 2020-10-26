import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { CharacterDefinition } from '../../model/character/CharacterDefinition';
import { WithId } from '../../types';

export enum CharacterAction {
    REGISTER_CHARACTER = 'character/register-character',
}

export function registerCharacter(
    def: CharacterDefinition
): PayloadAction<WithId<CharacterDefinition>> {
    return { type: CharacterAction.REGISTER_CHARACTER, payload: { ...def, id: cuid() } };
}

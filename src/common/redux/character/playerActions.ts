import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { CharacterDefinition } from '../../model/character/CharacterDefinition';
import { NormalizedPlayer } from '../../model/character/Player';

export enum PlayerAction {
    REGISTER = 'player/register',
}

export function registerPlayer(def: CharacterDefinition): PayloadAction<NormalizedPlayer> {
    return { type: PlayerAction.REGISTER, payload: { ...def, id: cuid() } };
}

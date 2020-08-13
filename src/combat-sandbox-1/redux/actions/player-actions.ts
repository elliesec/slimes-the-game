import { Player } from '../../Player';
import { PayloadAction } from '../redux-utils';

export enum PlayerActions {
    SET_PLAYER = 'SET_PLAYER',
}

export function setPlayer(player: Player): PayloadAction<Player> {
    return { type: PlayerActions.SET_PLAYER, payload: player };
}

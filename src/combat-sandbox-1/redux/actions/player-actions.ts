import { Player, PlayerDescription, PlayerStats } from '../../Player';
import { PayloadAction } from '../redux-utils';

export enum PlayerActions {
    SET_PLAYER = 'SET_PLAYER',
    SET_PLAYER_DESCRIPTION = 'SET_PLAYER_DESCRIPTION',
    SET_PLAYER_STAT = 'SET_PLAYER_STAT',
}

export interface PlayerStatUpdate {
    statName: keyof PlayerStats;
    value: number;
}

export interface PlayerDescriptionUpdate {
    key: keyof PlayerDescription;
    value: string;
}

export function setPlayer(player: Player): PayloadAction<Player> {
    return { type: PlayerActions.SET_PLAYER, payload: player };
}

export function setDescription(
    key: keyof PlayerDescription,
    value: string
): PayloadAction<PlayerDescriptionUpdate> {
    return {
        type: PlayerActions.SET_PLAYER_DESCRIPTION,
        payload: { key, value },
    };
}

export function setStat(
    statName: keyof PlayerStats,
    value: number
): PayloadAction<PlayerStatUpdate> {
    return {
        type: PlayerActions.SET_PLAYER_STAT,
        payload: { statName, value },
    };
}

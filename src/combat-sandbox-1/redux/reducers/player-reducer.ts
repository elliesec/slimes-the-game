import { Action, Reducer } from 'redux';
import { Player } from '../../Player';
import {
    PlayerActions,
    PlayerDescriptionUpdate,
    PlayerStatUpdate,
} from '../actions/player-actions';
import { PayloadAction } from '../redux-utils';

const reducerMap: Record<string, Reducer<Player>> = {
    [PlayerActions.SET_PLAYER]: setPlayerReducer,
    [PlayerActions.SET_PLAYER_DESCRIPTION]: setPlayerDescriptionReducer,
    [PlayerActions.SET_PLAYER_STAT]: setPlayerStatReducer,
};

export function playerReducer(
    player = defaultPlayer(),
    action: Action
): Player {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(player, action) : player;
}

export function defaultPlayer(): Player {
    return {
        name: 'Heroine',
        maxWillpower: 10,
        willpower: 10,
        strength: 2,
        dexterity: 2,
        constitution: 2,
        wisdom: 2,
        intelligence: 2,
        charisma: 2,
    };
}

function setPlayerReducer(
    player: Player,
    { payload }: PayloadAction<Player>
): Player {
    if (payload === player) {
        return player;
    }
    return { ...payload };
}

function setPlayerDescriptionReducer(
    player: Player,
    { payload: { key, value } }: PayloadAction<PlayerDescriptionUpdate>
): Player {
    if (player[key] === value) {
        return player;
    }
    return { ...player, [key]: value };
}

function setPlayerStatReducer(
    player: Player,
    { payload: { statName, value } }: PayloadAction<PlayerStatUpdate>
): Player {
    if (player[statName] === value) {
        return player;
    }
    return { ...player, [statName]: value };
}

import { Action, Reducer } from 'redux';
import {
    EncounterAction,
    EncounterRollDef,
} from '../../../common/redux/encounter/encounterActions';
import { PayloadAction } from '../../../common/redux/reduxUtils';
import { Player } from '../../Player';
import {
    PlayerActions,
    PlayerDescriptionUpdate,
    PlayerStatUpdate,
} from '../actions/player-actions';

const reducerMap: Record<string, Reducer<Player>> = {
    [PlayerActions.SET_PLAYER]: setPlayerReducer,
    [PlayerActions.SET_PLAYER_DESCRIPTION]: setPlayerDescriptionReducer,
    [PlayerActions.SET_PLAYER_STAT]: setPlayerStatReducer,
    [EncounterAction.ROLL]: encounterRollReducer,
};

export function playerReducer(player = defaultPlayer(), action: Action): Player {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(player, action) : player;
}

export function defaultPlayer(): Player {
    return {
        name: 'Firecrotch',
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

function setPlayerReducer(player: Player, { payload }: PayloadAction<Player>): Player {
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

function encounterRollReducer(
    player: Player,
    { payload }: PayloadAction<EncounterRollDef>
): Player {
    if (!payload || !payload.cost) {
        return player;
    }
    return {
        ...player,
        willpower: player.willpower - payload.cost,
    };
}

import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { NormalizedPlayer, Player } from '../../model/character/Player';
import { log } from '../../util/Log';
import { PlayerAction } from './playerActions';

const registerPlayerReducer = produce(
    (state: NormalizedPlayer, { payload }: PayloadAction<NormalizedPlayer>) => {
        if (state) {
            log.warn('Attempted to register the player twice. This is probably an error.');
        }
        return payload;
    },
    null
);

const reducers: Record<string, Reducer<NormalizedPlayer>> = {
    [PlayerAction.REGISTER]: registerPlayerReducer,
};

export const characterPlayerReducer = produce((state: Player, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, null);

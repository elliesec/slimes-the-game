import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { NormalizedPlayer, PlayerDefinition } from '../../model/character/Player';
import { WithId } from '../../types';
import { log } from '../../util/Log';
import { normalizeCharacter } from './characterByIdReducer';
import { PlayerAction } from './playerActions';

const registerPlayerReducer = produce(
    (state: string, { payload }: PayloadAction<WithId<PlayerDefinition>>) => {
        if (state) {
            log.warn('Attempted to register the player twice. This is probably an error.');
        }
        return payload.id;
    },
    null
);

const reducers: Record<string, Reducer<string>> = {
    [PlayerAction.REGISTER]: registerPlayerReducer,
};

export const characterPlayerReducer = produce((state: string, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, null);

export function normalizePlayer(def: WithId<PlayerDefinition>): NormalizedPlayer {
    return normalizeCharacter(def);
}

import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { Character } from '../../model/character/Character';
import { log } from '../../util/Log';
import { CharacterAction } from './characterActions';
import { CharacterByIdState } from './characterState';
import { PlayerAction } from './playerActions';

const registerCharacterReducer = produce(
    (state: CharacterByIdState, { payload }: PayloadAction<Character>) => {
        if (state[payload.id]) {
            log.warn(`Attempted to register a character with duplicate id "${payload.id}"`);
        }
        state[payload.id] = payload;
    },
    {}
);

const reducers: Record<string, Reducer<CharacterByIdState>> = {
    [PlayerAction.REGISTER]: registerCharacterReducer,
    [CharacterAction.REGISTER_CHARACTER]: registerCharacterReducer,
};

export const characterByIdReducer = produce((state: CharacterByIdState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, {});

import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { NormalizedPlayer, PlayerDefinition } from '../../model/character/Player';
import { WithId } from '../../types';
import { log } from '../../util/Log';
import { normalizeCharacter } from './characterByIdReducer';
import { CategorySlotItem, PlayerAction } from './playerActions';

const registerPlayerReducer = produce(
    (state: NormalizedPlayer, { payload }: PayloadAction<WithId<PlayerDefinition>>) => {
        if (state) {
            log.warn('Attempted to register the player twice. This is probably an error.');
        }
        return normalizePlayer(payload);
    },
    null
);

const setAppearanceItemReducer = produce(
    (
        state: NormalizedPlayer,
        { payload: { category, slot, item } }: PayloadAction<CategorySlotItem>
    ) => {
        const slotMappings = (state.appearance.categories[category] ??= {});
        slotMappings[slot] = item?.id ?? null;
        return state;
    }
);

const reducers: Record<string, Reducer<NormalizedPlayer>> = {
    [PlayerAction.REGISTER]: registerPlayerReducer,
    [PlayerAction.SET_APPEARANCE_ITEM]: setAppearanceItemReducer,
};

export const characterPlayerReducer = produce((state: NormalizedPlayer, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, null);

export function normalizePlayer(def: WithId<PlayerDefinition>): NormalizedPlayer {
    return normalizeCharacter(def);
}

import produce from 'immer';
import { Action, Reducer } from 'redux';
import { AppearanceSlotTypeValues } from '../../model/appearance/AppearanceSlot';
import { ItemCategoryValues } from '../../model/appearance/ItemCategory';
import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import {
    CharacterDefinition,
    SerialisedCategoryMapping,
    SerialisedSlotMapping,
} from '../../model/character/CharacterDefinition';
import {
    NormalizedCategoryMapping,
    NormalizedCharacter,
    NormalizedSlotMapping,
} from '../../model/character/NormalizedCharacter';
import { PlayerDefinition } from '../../model/character/Player';
import { WithId } from '../../types';
import { log } from '../../util/Log';
import { itemId } from '../item/itemByIdReducer';
import { PayloadAction } from '../reduxUtils';
import { CharacterAction, SetCharacterAppearanceItemPayload } from './characterActions';
import { normalizePlayer } from './characterPlayerReducer';
import { CharacterByIdState } from './characterState';
import { PlayerAction } from './playerActions';

const registerPlayerReducer = produce(
    (state: CharacterByIdState, { payload }: PayloadAction<WithId<PlayerDefinition>>) => {
        if (state[payload.id]) {
            log.warn(`Attempted to register player character with duplicate id "${payload.id}"`);
        }
        state[payload.id] = normalizePlayer(payload);
    },
    {}
);

const registerCharacterReducer = produce(
    (state: CharacterByIdState, { payload }: PayloadAction<WithId<CharacterDefinition>>) => {
        if (state[payload.id]) {
            log.warn(`Attempted to register a character with duplicate id "${payload.id}"`);
        }
        state[payload.id] = normalizeCharacter(payload);
    },
    {}
);

const setCharacterAppearanceItemReducer = produce(
    (
        state: CharacterByIdState,
        {
            payload: { characterId, category, slot, item },
        }: PayloadAction<SetCharacterAppearanceItemPayload>
    ) => {
        const character = state[characterId];
        if (character) {
            const categoryMapping = (character.appearance.categories ??= {});
            const slotMapping = (categoryMapping[category] ??= {});
            slotMapping[slot] = item?.id ?? null;
        }
        return state;
    }
);

const reducers: Record<string, Reducer<CharacterByIdState>> = {
    [PlayerAction.REGISTER]: registerPlayerReducer,
    [CharacterAction.REGISTER_CHARACTER]: registerCharacterReducer,
    [CharacterAction.SET_APPEARANCE_ITEM]: setCharacterAppearanceItemReducer,
};

export const characterByIdReducer = produce((state: CharacterByIdState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, {});

export function normalizeCharacter(def: WithId<CharacterDefinition>): NormalizedCharacter {
    return {
        ...def,
        appearance: {
            ...def.appearance,
            categories: mapCategories(def.appearance.categories, def.appearance.family),
        },
    };
}

function mapCategories(
    scm: SerialisedCategoryMapping,
    family: ItemFamilyType
): NormalizedCategoryMapping {
    return ItemCategoryValues.reduce((ncm, category) => {
        if (scm[category]) {
            ncm[category] = mapSlots(scm[category], family);
        }
        return ncm;
    }, {} as NormalizedCategoryMapping);
}

function mapSlots(ssm: SerialisedSlotMapping, family: ItemFamilyType): NormalizedSlotMapping {
    return AppearanceSlotTypeValues.reduce((nsm, slot) => {
        if (ssm[slot]) {
            nsm[slot] = itemId(family, slot, ssm[slot]);
        }
        return nsm;
    }, {} as NormalizedSlotMapping);
}

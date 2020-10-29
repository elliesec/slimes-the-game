import { createSelector } from 'reselect';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotTypeValues } from '../../model/appearance/AppearanceSlot';
import { ItemCategoryValues } from '../../model/appearance/ItemCategory';
import {
    CharacterAppearance,
    CharacterCategoryMapping,
    CharacterSlotMapping,
} from '../../model/character/Character';
import {
    NormalizedCategoryMapping,
    NormalizedCharacterAppearance,
    NormalizedSlotMapping,
} from '../../model/character/NormalizedCharacter';
import { NormalizedPlayer, Player } from '../../model/character/Player';
import { log } from '../../util/Log';
import { getItemByIdState } from '../item/itemSelectors';
import { ItemByIdState } from '../item/itemState';
import { getItemFamilyByTypeState } from '../itemFamily/itemFamilySelectors';
import { ItemFamilyByTypeState } from '../itemFamily/itemFamilyState';
import { WithCharacterState } from './characterState';

export function getCharacterPlayerState(state: WithCharacterState): NormalizedPlayer {
    return state.character.player;
}

export function getCharacterPlayerAppearanceState(
    state: WithCharacterState
): NormalizedCharacterAppearance {
    return state.character.player?.appearance ?? null;
}

export const getPlayerAppearance = createSelector(
    [getCharacterPlayerAppearanceState, getItemFamilyByTypeState, getItemByIdState],
    (
        normalizedAppearance: NormalizedCharacterAppearance,
        itemFamiliesByType: ItemFamilyByTypeState,
        itemsById: ItemByIdState
    ): CharacterAppearance => {
        if (!normalizedAppearance || !itemsById) {
            log.warn(`Player appearance is not defined. This is probably an error`);
            return null;
        }
        return mapAppearance(normalizedAppearance, itemFamiliesByType, itemsById);
    }
);

export const getPlayerAppearanceItems = createSelector(
    [getCharacterPlayerAppearanceState, getItemByIdState],
    (appearance: NormalizedCharacterAppearance, itemsById: ItemByIdState): AppearanceItem[] => {
        if (!appearance || !itemsById) {
            return [];
        }
        const appearanceItems: AppearanceItem[] = [];
        Object.values(appearance.categories).forEach((slotMapping: NormalizedSlotMapping) => {
            Object.values(slotMapping).forEach((itemId) => {
                const item = itemsById[itemId];
                if (item) {
                    appearanceItems.push(item);
                }
            });
        });
        return appearanceItems.sort((i1, i2) => i1.priority - i2.priority);
    }
);

export const getPlayer = createSelector(
    [getCharacterPlayerState, getItemFamilyByTypeState, getItemByIdState],
    (normalizedPlayer, itemFamiliesByType: ItemFamilyByTypeState, itemsById): Player => {
        if (!normalizedPlayer) {
            return null;
        }
        const { appearance } = normalizedPlayer;
        return {
            ...normalizedPlayer,
            appearance: mapAppearance(appearance, itemFamiliesByType, itemsById),
        };
    }
);

function mapAppearance(
    normalizedAppearance: NormalizedCharacterAppearance,
    itemFamiliesByType: ItemFamilyByTypeState,
    itemsById: ItemByIdState
): CharacterAppearance {
    return {
        family: itemFamiliesByType[normalizedAppearance.family],
        categories: mapCategories(normalizedAppearance.categories, itemsById),
    };
}

function mapCategories(
    ncm: NormalizedCategoryMapping,
    itemsById: ItemByIdState
): CharacterCategoryMapping {
    return ItemCategoryValues.reduce((ccm, category) => {
        ccm[category] = ncm[category] ? mapSlots(ncm[category], itemsById) : {};
        return ccm;
    }, {} as CharacterCategoryMapping);
}

function mapSlots(nsm: NormalizedSlotMapping, itemsById: ItemByIdState): CharacterSlotMapping {
    return AppearanceSlotTypeValues.reduce((csm, slot) => {
        if (nsm[slot]) {
            csm[slot] = itemsById[nsm[slot]];
        }
        return csm;
    }, {} as CharacterSlotMapping);
}

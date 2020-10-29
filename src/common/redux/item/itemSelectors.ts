import { createSelector } from 'reselect';
import { State } from '../../../slimes-the-game/redux/store';
import { memoize } from '../../functions';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemCategory, ItemCategoryValues } from '../../model/appearance/ItemCategory';
import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import { PartialRecord } from '../../types';
import { getProps } from '../commonSelectors';
import { itemId } from './itemByIdReducer';
import { ItemByFamilyState, ItemByIdState, WithItemState } from './itemState';

export type ItemSlotMapping = PartialRecord<AppearanceSlotType, AppearanceItem[]>;
export type ItemCategoryMapping = PartialRecord<ItemCategory, ItemSlotMapping>;

export function getItemByIdState(state: WithItemState): ItemByIdState {
    return state.item.byId;
}

export function getItemByFamilyState(state: WithItemState): ItemByFamilyState {
    return state.item.byFamily;
}

export function getItemById(state: WithItemState, id: string): AppearanceItem {
    return state.item.byId[id] ?? null;
}

export const getItemByFamilySlotName = memoize(
    (
        state: WithItemState,
        family: ItemFamilyType,
        slot: AppearanceSlotType,
        name: string
    ): AppearanceItem => {
        const id = itemId(family, slot, name);
        return getItemById(state, id);
    },
    { max: 50 }
);

export const getItemCategoryMappings = createSelector<
    State,
    ItemFamilyType,
    ItemByIdState,
    ItemByFamilyState,
    ItemFamilyType,
    ItemCategoryMapping
>(
    [getItemByIdState, getItemByFamilyState, getProps],
    (
        itemsById: ItemByIdState,
        itemIdsByFamily: ItemByFamilyState,
        family: ItemFamilyType
    ): ItemCategoryMapping => {
        const familyIds = itemIdsByFamily[family] ?? [];
        const categoryMapping: ItemCategoryMapping = {};
        ItemCategoryValues.forEach((category) => (categoryMapping[category] = {}));
        familyIds.forEach((id) => {
            const item = itemsById[id];
            if (item) {
                const slotMapping = (categoryMapping[item.category] ??= {});
                (slotMapping[item.slot] ??= []).push(item);
            }
        });
        return categoryMapping;
    }
);

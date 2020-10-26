import { memoize } from '../../functions';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import { itemId } from './itemByIdReducer';
import { ItemByIdState, WithItemState } from './itemState';

export function getItemByIdState(state: WithItemState): ItemByIdState {
    return state.item.byId;
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

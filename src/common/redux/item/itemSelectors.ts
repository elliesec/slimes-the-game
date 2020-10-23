import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import { memoize } from '../../functions';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { itemId } from './itemByIdReducer';
import { WithItemState } from './itemState';

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

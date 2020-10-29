import { memoize } from '../../functions';
import { ItemFamily, ItemFamilyType } from '../../model/appearance/ItemFamily';
import { ItemFamilyByTypeState, WithItemFamilyState } from './itemFamilyState';

export function getItemFamilyByTypeState(state: WithItemFamilyState): ItemFamilyByTypeState {
    return state.itemFamily.byType;
}

export const getItemFamilyByType = memoize(
    (state: ItemFamilyByTypeState, family: ItemFamilyType): ItemFamily => {
        return state[family] ?? null;
    }
);

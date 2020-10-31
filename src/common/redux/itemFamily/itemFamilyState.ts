import { ItemFamily, ItemFamilyType } from '../../model/appearance/ItemFamily';
import { PartialRecord } from '../../types';

export type ItemFamilyByTypeState = PartialRecord<ItemFamilyType, ItemFamily>;

export interface ItemFamilyState {
    byType: ItemFamilyByTypeState;
}

export interface WithItemFamilyState {
    itemFamily: ItemFamilyState;
}

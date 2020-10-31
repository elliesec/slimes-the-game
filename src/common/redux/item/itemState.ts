import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import { PartialRecord, StringRecord } from '../../types';

export type ItemByIdState = StringRecord<AppearanceItem>;
export type ItemByFamilyState = PartialRecord<ItemFamilyType, string[]>;

export interface ItemState {
    byId: ItemByIdState;
    byFamily: ItemByFamilyState;
}

export interface WithItemState {
    item: ItemState;
}

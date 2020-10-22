import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { StringRecord } from '../../types';

export type ItemByIdState = StringRecord<AppearanceItem>;

export interface ItemState {
    byId: ItemByIdState;
}

export interface WithItemState {
    item: ItemState;
}

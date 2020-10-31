import produce from 'immer';
import objectHash from 'object-hash';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { ItemFamilyType } from '../../model/appearance/ItemFamily';
import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemAction } from './itemActions';
import { ItemByIdState } from './itemState';

const registerItemReducer = produce(
    (state: ItemByIdState, { payload }: PayloadAction<AppearanceItemDefinition[]>) => {
        if (!Array.isArray(payload)) {
            return state;
        }
        payload.forEach((itemDef) => {
            const id = itemIdFromItem(itemDef);
            state[id] = { ...itemDef, id };
        });
        return state;
    },
    {}
);

const reducers: Record<string, Reducer<ItemByIdState>> = {
    [ItemAction.REGISTER_ITEMS]: registerItemReducer,
};

export const itemByIdReducer = produce((state: ItemByIdState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, {});

export function itemIdFromItem(item: AppearanceItemDefinition): string {
    return itemId(item.family, item.slot, item.name);
}

export function itemId(family: ItemFamilyType, slot: AppearanceSlotType, name: string): string {
    return objectHash([family, slot, name]);
}

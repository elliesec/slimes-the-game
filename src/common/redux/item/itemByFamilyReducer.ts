import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';
import { ItemAction } from './itemActions';
import { itemIdFromItem } from './itemByIdReducer';
import { ItemByFamilyState } from './itemState';

const registerItemReducer = produce(
    (state: ItemByFamilyState, { payload }: PayloadAction<AppearanceItemDefinition[]>) => {
        if (!Array.isArray(payload)) {
            return state;
        }
        payload.forEach((itemDef) => {
            const { family } = itemDef;
            const id = itemIdFromItem(itemDef);
            (state[family] ??= []).push(id);
        });
        return state;
    },
    {}
);

const reducers: Record<string, Reducer<ItemByFamilyState>> = {
    [ItemAction.REGISTER_ITEMS]: registerItemReducer,
};

export const itemByFamilyReducer = produce((state: ItemByFamilyState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, {});

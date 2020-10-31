import produce from 'immer';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { ItemFamily } from '../../model/appearance/ItemFamily';
import { ItemFamilyAction } from './itemFamilyActions';
import { ItemFamilyByTypeState } from './itemFamilyState';

const registerItemFamilyReducer = produce(
    (state: ItemFamilyByTypeState, { payload }: PayloadAction<ItemFamily>) => {
        state[payload.type] = payload;
        return state;
    }
);

const reducers: Record<string, Reducer<ItemFamilyByTypeState>> = {
    [ItemFamilyAction.REGISTER_FAMILY]: registerItemFamilyReducer,
};

export const itemFamilyByTypeReducer = produce((state: ItemFamilyByTypeState, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, {});

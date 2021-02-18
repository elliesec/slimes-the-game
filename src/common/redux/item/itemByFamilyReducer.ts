import produce from 'immer';
import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';
import { ItemAction } from './itemActions';
import { itemIdFromItem } from './itemByIdReducer';
import { ItemByFamilyState } from './itemState';
import { PayloadAction, reducerFromMap } from '../reduxUtils';

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

export const itemByFamilyReducer = reducerFromMap<ItemByFamilyState>(
    {
        [ItemAction.REGISTER_ITEMS]: registerItemReducer,
    },
    {}
);

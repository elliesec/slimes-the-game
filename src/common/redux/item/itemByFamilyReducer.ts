import produce from 'immer';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';
import { ItemAction } from './itemActions';
import { itemIdFromItem } from './itemByIdReducer';
import { ItemByFamilyState } from './itemState';
import { reducerFromMap } from '../reduxUtils';

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

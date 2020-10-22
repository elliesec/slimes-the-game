import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';

export enum ItemAction {
    REGISTER_ITEMS = 'item/register-items',
}

export function registerItems(
    ...items: AppearanceItemDefinition[]
): PayloadAction<AppearanceItemDefinition[]> {
    return { type: ItemAction.REGISTER_ITEMS, payload: items };
}

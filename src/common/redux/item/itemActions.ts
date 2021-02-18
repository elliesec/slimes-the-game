import { AppearanceItemDefinition } from '../../model/appearance/AppearanceItem';
import { PayloadAction } from '../reduxUtils';

export enum ItemAction {
    REGISTER_ITEMS = 'item/register-items',
}

export function registerItems(
    ...items: AppearanceItemDefinition[]
): PayloadAction<AppearanceItemDefinition[]> {
    return { type: ItemAction.REGISTER_ITEMS, payload: items };
}

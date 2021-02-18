import { ItemFamily } from '../../model/appearance/ItemFamily';
import { PayloadAction } from '../reduxUtils';

export enum ItemFamilyAction {
    REGISTER_FAMILY = 'itemFamily/register-family',
}

export function registerItemFamily(family: ItemFamily): PayloadAction<ItemFamily> {
    return { type: ItemFamilyAction.REGISTER_FAMILY, payload: family };
}

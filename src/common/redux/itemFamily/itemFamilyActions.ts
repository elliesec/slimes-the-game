import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { ItemFamily } from '../../model/appearance/ItemFamily';

export enum ItemFamilyAction {
    REGISTER_FAMILY = 'itemFamily/register-family',
}

export function registerItemFamily(family: ItemFamily): PayloadAction<ItemFamily> {
    return { type: ItemFamilyAction.REGISTER_FAMILY, payload: family };
}

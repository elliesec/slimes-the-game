import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemCategory } from '../../model/appearance/ItemCategory';
import { CharacterDefinition } from '../../model/character/CharacterDefinition';
import { NormalizedPlayer } from '../../model/character/Player';

export enum PlayerAction {
    REGISTER = 'player/register',
    SET_APPEARANCE_ITEM = 'player/set-appearance-item',
}

export interface CategorySlotItem {
    category: ItemCategory;
    slot: AppearanceSlotType;
    item: AppearanceItem;
}

export function registerPlayer(def: CharacterDefinition): PayloadAction<NormalizedPlayer> {
    return { type: PlayerAction.REGISTER, payload: { ...def, id: cuid() } };
}

export function setPlayerAppearanceItem(
    category: ItemCategory,
    slot: AppearanceSlotType,
    item: AppearanceItem
): PayloadAction<CategorySlotItem> {
    return { type: PlayerAction.SET_APPEARANCE_ITEM, payload: { category, slot, item } };
}

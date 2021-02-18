import cuid from 'cuid';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemCategory } from '../../model/appearance/ItemCategory';
import { CharacterDefinition } from '../../model/character/CharacterDefinition';
import { WithId } from '../../types';
import { PayloadAction } from '../reduxUtils';

export enum CharacterAction {
    REGISTER_CHARACTER = 'character/register-character',
    SET_APPEARANCE_ITEM = 'character/set-appearance-item',
}

export interface SetCharacterAppearanceItemPayload {
    characterId: string;
    category: ItemCategory;
    slot: AppearanceSlotType;
    item: AppearanceItem;
}

export function registerCharacter(
    def: CharacterDefinition
): PayloadAction<WithId<CharacterDefinition>> {
    return { type: CharacterAction.REGISTER_CHARACTER, payload: { ...def, id: cuid() } };
}

export function setCharacterAppearanceItem(
    characterId: string,
    category: ItemCategory,
    slot: AppearanceSlotType,
    item: AppearanceItem
): PayloadAction<SetCharacterAppearanceItemPayload> {
    return {
        type: CharacterAction.SET_APPEARANCE_ITEM,
        payload: { characterId, category, slot, item },
    };
}

import cuid from 'cuid';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { store } from '../../../slimes-the-game/redux/store';
import { AppearanceItem } from '../../model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../model/appearance/AppearanceSlot';
import { ItemCategory } from '../../model/appearance/ItemCategory';
import { CharacterDefinition } from '../../model/character/CharacterDefinition';
import { NormalizedPlayer } from '../../model/character/Player';
import { setCharacterAppearanceItem, SetCharacterAppearanceItemPayload } from './characterActions';
import { getPlayerId } from './playerSelectors';

export enum PlayerAction {
    REGISTER = 'player/register',
}

export function registerPlayer(def: CharacterDefinition): PayloadAction<NormalizedPlayer> {
    return { type: PlayerAction.REGISTER, payload: { ...def, id: cuid() } };
}

export function setPlayerAppearanceItem(
    category: ItemCategory,
    slot: AppearanceSlotType,
    item: AppearanceItem
): PayloadAction<SetCharacterAppearanceItemPayload> {
    const playerId = getPlayerId(store.getState());
    return setCharacterAppearanceItem(playerId, category, slot, item);
}

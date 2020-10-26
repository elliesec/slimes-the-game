import { PartialRecord } from '../../types';
import { AppearanceItem } from './AppearanceItem';
import { AppearanceSlotType } from './AppearanceSlot';
import { ItemFamilyType } from './ItemFamily';

export interface CharacterAppearance {
    family: ItemFamilyType;
    items: PartialRecord<AppearanceSlotType, AppearanceItem>;
}

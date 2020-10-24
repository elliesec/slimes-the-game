import { MapFunction } from '../../../common/functions';
import { AppearanceItemDefinition } from '../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../common/model/appearance/ItemFamily';

export type AppearanceItemShorthand = Omit<
    AppearanceItemDefinition,
    'family' | 'slot' | 'category'
>;

export function itemDefinitionGenerator(
    family: ItemFamilyType,
    slot: AppearanceSlotType,
    category: ItemCategory
): MapFunction<AppearanceItemShorthand, AppearanceItemDefinition> {
    return (def: AppearanceItemShorthand) => ({ ...def, family, slot, category });
}

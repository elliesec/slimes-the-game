import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../common/model/appearance/ItemCategory';
import { ItemFamily, ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';

const playerFamily: ItemFamily = {
    type: ItemFamilyType.HUMAN,
    slots: [
        {
            type: AppearanceSlotType.HEAD,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.TORSO,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.HIPS,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.LEGS,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.FEET,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.ARM_LEFT,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.ARM_RIGHT,
            canEquip: true,
        },
        {
            type: AppearanceSlotType.HAIR_BACK,
            canEquip: false,
            categories: [ItemCategory.BODY],
        },
        {
            type: AppearanceSlotType.EXPRESSION,
            canEquip: false,
            categories: [ItemCategory.BODY],
        },
        {
            type: AppearanceSlotType.HAIR_FRONT,
            canEquip: false,
            categories: [ItemCategory.BODY],
        },
        {
            type: AppearanceSlotType.PUBIC_HAIR,
            canEquip: false,
            categories: [ItemCategory.BODY],
        },
        {
            type: AppearanceSlotType.SHADOW,
            canEquip: false,
            categories: [ItemCategory.BODY],
        },
    ],
};

export default playerFamily;

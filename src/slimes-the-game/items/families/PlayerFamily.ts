import { AppearanceSlotType } from '../../../common/model/appearance/AppearanceSlot';
import { ItemFamily, ItemFamilyType } from '../../../common/model/appearance/ItemFamily';

const playerFamily: ItemFamily = {
    type: ItemFamilyType.PLAYER,
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
        },
        {
            type: AppearanceSlotType.EXPRESSION,
            canEquip: false,
        },
        {
            type: AppearanceSlotType.HAIR_FRONT,
            canEquip: false,
        },
        {
            type: AppearanceSlotType.PUBIC_HAIR,
            canEquip: false,
        },
        {
            type: AppearanceSlotType.SHADOW,
            canEquip: false,
        },
    ],
};

export default playerFamily;

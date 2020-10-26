import { AppearanceSlotType } from '../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../common/model/appearance/ItemFamily';
import { CharacterDefinition } from '../../../common/model/character/CharacterDefinition';

const player: CharacterDefinition = {
    appearance: {
        family: ItemFamilyType.HUMAN,
        categories: {
            [ItemCategory.BODY]: {
                [AppearanceSlotType.HEAD]: 'defaultHead',
                [AppearanceSlotType.TORSO]: 'defaultTorso',
                [AppearanceSlotType.LEGS]: 'defaultLegs',
                [AppearanceSlotType.ARM_LEFT]: 'defaultArmLeft',
                [AppearanceSlotType.ARM_RIGHT]: 'defaultArmRight',
                [AppearanceSlotType.HAIR_BACK]: 'defaultHairBack',
                [AppearanceSlotType.EXPRESSION]: 'defaultExpression',
                [AppearanceSlotType.HAIR_FRONT]: 'defaultHairFront',
                [AppearanceSlotType.PUBIC_HAIR]: 'defaultPubicHair',
                [AppearanceSlotType.SHADOW]: 'defaultShadow',
            },
        },
    },
};

export default player;

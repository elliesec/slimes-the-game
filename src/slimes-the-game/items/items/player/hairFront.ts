import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';

const items: AppearanceItemDefinition[] = [
    {
        name: 'defaultHairFront',
        slot: AppearanceSlotType.HAIR_FRONT,
        family: ItemFamilyType.PLAYER,
        category: ItemCategory.BODY,
        assets: [
            {
                name: 'Default',
                url: require('./hairFront/defaultHairFront.png'),
            },
        ],
    },
];

export default items;

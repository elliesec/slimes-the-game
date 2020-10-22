import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItemDefinition[] = [
    {
        name: 'defaultHairFront',
        slot: AppearanceSlotType.HAIR_FRONT,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./hairFront/defaultHairFront.png'),
            },
        ],
    },
];

export default items;

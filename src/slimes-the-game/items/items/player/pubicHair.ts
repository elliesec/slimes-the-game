import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItemDefinition[] = [
    {
        name: 'defaultPubicHair',
        slot: AppearanceSlotType.PUBIC_HAIR,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./pubicHair/defaultPubicHair.png'),
            },
        ],
    },
];

export default items;

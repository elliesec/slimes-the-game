import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItemDefinition[] = [
    {
        name: 'defaultArmLeft',
        slot: AppearanceSlotType.ARM_LEFT,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./armLeft/defaultArmLeft.png'),
            },
        ],
    },
];

export default items;

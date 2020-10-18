import { AppearanceItem } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItem[] = [
    {
        name: 'defaultArmRight',
        slot: AppearanceSlotType.ARM_RIGHT,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./armRight/defaultArmRight.png'),
            },
        ],
    },
];

export default items;

import { AppearanceItem } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamily } from '../../ItemFamily';

export const items: AppearanceItem[] = [
    {
        name: 'defaultShadow',
        slot: AppearanceSlotType.SHADOW,
        family: ItemFamily.PLAYER,
        assets: [
            {
                url: require('./shadow/defaultShadow.png'),
            },
        ],
    },
];

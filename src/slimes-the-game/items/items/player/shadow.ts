import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItemDefinition[] = [
    {
        name: 'defaultShadow',
        slot: AppearanceSlotType.SHADOW,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./shadow/defaultShadow.png'),
            },
        ],
    },
];

export default items;

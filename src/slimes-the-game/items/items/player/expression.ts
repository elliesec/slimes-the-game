import { AppearanceItem } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemFamilyType } from '../../ItemFamily';

const items: AppearanceItem[] = [
    {
        name: 'defaultExpression',
        slot: AppearanceSlotType.EXPRESSION,
        family: ItemFamilyType.PLAYER,
        assets: [
            {
                name: 'Default',
                url: require('./expression/defaultExpression.png'),
            },
        ],
    },
];

export default items;

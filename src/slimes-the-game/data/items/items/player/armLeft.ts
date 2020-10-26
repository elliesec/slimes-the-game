import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.ARM_LEFT,
    ItemCategory.BODY
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultArmLeft',
        priority: 30,
        assets: [
            {
                name: 'Default',
                url: require('./armLeft/defaultArmLeft.png'),
            },
        ],
    }),
];

export default [...bodyItems];

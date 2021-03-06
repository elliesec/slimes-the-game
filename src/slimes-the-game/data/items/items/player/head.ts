import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.HEAD,
    ItemCategory.BODY
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultHead',
        displayName: 'Default Head',
        priority: 80,
        assets: [
            {
                name: 'Default',
                url: require('./head/defaultHead.png'),
            },
        ],
    }),
];

export default [...bodyItems];

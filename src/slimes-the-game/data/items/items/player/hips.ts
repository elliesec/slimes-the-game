import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createUnderwearItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.HIPS,
    ItemCategory.UNDERWEAR
);

const underwearItems: AppearanceItemDefinition[] = [
    createUnderwearItem({
        name: 'plainPanties',
        displayName: 'Plain Panties',
        description: 'A simple pair of panties',
        priority: 200,
        assets: [
            {
                name: 'Default',
                url: require('./hips/plainPanties.png'),
            },
        ],
    }),
];

export default [...underwearItems];

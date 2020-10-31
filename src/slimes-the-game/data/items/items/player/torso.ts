import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.TORSO,
    ItemCategory.BODY
);

const createUnderwearItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.TORSO,
    ItemCategory.UNDERWEAR
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultTorso',
        displayName: 'Default Torso',
        priority: 40,
        assets: [
            {
                name: 'Default',
                url: require('./torso/defaultTorso.png'),
            },
        ],
    }),
];

const underwearItems: AppearanceItemDefinition[] = [
    createUnderwearItem({
        name: 'plainBra',
        displayName: 'Plain Bra',
        description: 'A simple bra',
        priority: 210,
        assets: [
            {
                name: 'Default',
                url: require('./torso/plainBra.png'),
            },
        ],
    }),
];

export default [...bodyItems, ...underwearItems];

import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.PUBIC_HAIR,
    ItemCategory.BODY
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultPubicHair',
        priority: 60,
        assets: [
            {
                name: 'Default',
                url: require('./pubicHair/defaultPubicHair.png'),
            },
        ],
    }),
];

export default [...bodyItems];

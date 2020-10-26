import { AppearanceItemDefinition } from '../../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.HUMAN,
    AppearanceSlotType.HAIR_BACK,
    ItemCategory.BODY
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultHairBack',
        assets: [
            {
                name: 'Default',
                url: require('./hairBack/defaultHairBack.png'),
            },
        ],
    }),
];

export default [...bodyItems];
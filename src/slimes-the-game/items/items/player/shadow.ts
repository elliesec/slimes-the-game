import { AppearanceItemDefinition } from '../../../../common/model/appearance/AppearanceItem';
import { AppearanceSlotType } from '../../../../common/model/appearance/AppearanceSlot';
import { ItemCategory } from '../../../../common/model/appearance/ItemCategory';
import { ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';
import { itemDefinitionGenerator } from '../itemDefUtils';

const createBodyItem = itemDefinitionGenerator(
    ItemFamilyType.PLAYER,
    AppearanceSlotType.SHADOW,
    ItemCategory.BODY
);

const bodyItems: AppearanceItemDefinition[] = [
    createBodyItem({
        name: 'defaultShadow',
        assets: [
            {
                name: 'Default',
                url: require('./shadow/defaultShadow.png'),
            },
        ],
    }),
];

export default [...bodyItems];

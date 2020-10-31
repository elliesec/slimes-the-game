import { ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';
import { CharacterDefinition } from '../../../../common/model/character/CharacterDefinition';

const dummyCharacter: CharacterDefinition = {
    appearance: {
        family: ItemFamilyType.HUMAN,
        categories: {},
    },
};

export default dummyCharacter;

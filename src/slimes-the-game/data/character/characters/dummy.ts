import { ItemFamilyType } from '../../../../common/model/appearance/ItemFamily';
import { CharacterDefinition } from '../../../../common/model/character/Character';

const dummyCharacter: CharacterDefinition = {
    appearance: {
        family: ItemFamilyType.HUMAN,
        items: {},
    },
};

export default dummyCharacter;

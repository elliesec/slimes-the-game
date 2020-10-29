import { CharacterByIdState, WithCharacterState } from './characterState';

export function getCharacterByIdState(state: WithCharacterState): CharacterByIdState {
    return state.character.byId;
}

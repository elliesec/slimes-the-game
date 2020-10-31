import { combineReducers } from 'redux';
import { characterByIdReducer } from './characterByIdReducer';
import { characterPlayerReducer } from './characterPlayerReducer';
import { CharacterState } from './characterState';

export const characterReducer = combineReducers<CharacterState>({
    player: characterPlayerReducer,
    byId: characterByIdReducer,
});

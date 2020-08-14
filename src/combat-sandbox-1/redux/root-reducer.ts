import { combineReducers } from 'redux';
import { currentSceneReducer } from './reducers/current-scene-reducer';
import { encounterReducer } from './reducers/encounter-reducer';
import { playerReducer } from './reducers/player-reducer';
import { State } from './store';

export const rootReducer = combineReducers<State>({
    player: playerReducer,
    encounter: encounterReducer,
    currentScene: currentSceneReducer,
});

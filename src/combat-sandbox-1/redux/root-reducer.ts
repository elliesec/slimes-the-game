import { combineReducers } from 'redux';
import { encounterReducer } from '../../common/redux/encounter/encounterReducer';
import { currentSceneReducer } from './reducers/current-scene-reducer';
import { playerReducer } from './reducers/player-reducer';
import { State } from './store';

export const rootReducer = combineReducers<State>({
    player: playerReducer,
    encounter: encounterReducer,
    currentScene: currentSceneReducer,
});

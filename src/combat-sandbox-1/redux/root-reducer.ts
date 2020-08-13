import { combineReducers } from 'redux';
import { playerReducer } from './reducers/player-reducer';

export const rootReducer = combineReducers({
    player: playerReducer,
});

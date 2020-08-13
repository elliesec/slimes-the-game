import { createStore } from 'redux';
import { Player } from '../Player';
import { rootReducer } from './root-reducer';

export interface State {
    player: Player;
}

export const store = createStore(rootReducer);

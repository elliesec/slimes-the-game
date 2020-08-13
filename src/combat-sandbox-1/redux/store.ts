import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/index';
import { Player } from '../Player';
import { rootReducer } from './root-reducer';

export interface State {
    player: Player;
}

export const store = createStore(rootReducer, composeWithDevTools());

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/index';
import { Encounter } from '../model/Encounter';
import { Scene } from '../enums';
import { Player } from '../Player';
import { rootReducer } from './root-reducer';

export interface ActiveEncounter {
    encounter: Encounter;
    stage: number;
}

export interface EncounterState {
    all: Record<string, Encounter>;
    active: ActiveEncounter;
}

export interface State {
    player: Player;
    currentScene: Scene;
    encounter: EncounterState;
}

export const store = createStore(rootReducer, composeWithDevTools());

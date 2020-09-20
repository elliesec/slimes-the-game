import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { EncounterState } from '../../common/redux/encounter/encounterState';
import { Scene } from '../enums';
import { ActiveEncounter } from '../model/ActiveEncounter';
import { Encounter } from '../model/Encounter';
import { Player } from '../Player';
import { rootReducer } from './root-reducer';

export interface OldEncounterState {
    all: Record<string, Encounter>;
    active: ActiveEncounter;
}

export interface State {
    player: Player;
    currentScene: Scene;
    encounter: EncounterState;
}

export const store = createStore(rootReducer, composeWithDevTools());

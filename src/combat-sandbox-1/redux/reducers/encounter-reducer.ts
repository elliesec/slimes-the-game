import { combineReducers } from 'redux';
import { EncounterState } from '../store';
import { activeEncounterReducer } from './active-encounter-reducer';
import { allEncountersReducer } from './all-encounters-reducer';

export const encounterReducer = combineReducers<EncounterState>({
    all: allEncountersReducer,
    active: activeEncounterReducer,
});

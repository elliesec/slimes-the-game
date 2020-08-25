import { combineReducers } from 'redux';
import { activeEncounterReducer } from './activeEncounterReducer';
import { encounterByIdReducer } from './encounterByIdReducer';
import { EncounterState } from './encounterState';

export const encounterReducer = combineReducers<EncounterState>({
    byId: encounterByIdReducer,
    active: activeEncounterReducer,
});

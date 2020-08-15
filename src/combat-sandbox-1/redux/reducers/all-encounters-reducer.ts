import { Action, Reducer } from 'redux';
import { Encounter } from '../../model/Encounter';
import { EncounterActions } from '../actions/encounter-actions';
import { PayloadAction } from '../redux-utils';

const reducers: Record<string, Reducer<Record<string, Encounter>>> = {
    [EncounterActions.REGISTER_ENCOUNTER]: registerEncounterReducer,
};

export function allEncountersReducer(
    encounters: Record<string, Encounter> = {},
    action: Action
): Record<string, Encounter> {
    const reducer = reducers[action.type];
    return reducer ? reducer(encounters, action) : encounters;
}

function registerEncounterReducer(
    encounters: Record<string, Encounter>,
    { payload }: PayloadAction<Encounter>
): Record<string, Encounter> {
    if (encounters[payload.id]) {
        console.warn(`Warning: duplicate encounter registration for ID "${payload.id}"`);
    }
    return { ...encounters, [payload.id]: payload };
}

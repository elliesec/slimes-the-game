import { Action, Reducer } from 'redux';
import { Encounter } from '../../model/encounter/Encounter';
import { PayloadAction } from '../reduxUtils';
import { EncounterAction } from './encounterActions';

const reducers: Record<string, Reducer<Record<string, Encounter>>> = {
    [EncounterAction.REGISTER]: encounterRegisterReducer,
};

export function encounterByIdReducer(
    state: Record<string, Encounter> = {},
    action: Action
): Record<string, Encounter> {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

function encounterRegisterReducer(
    state: Record<string, Encounter>,
    action: PayloadAction<Encounter>
): Record<string, Encounter> {
    const encounter = action.payload;

    if (!encounter) {
        return state;
    }

    if (state[encounter.id]) {
        console.warn(`Duplicate encounter ID registered: ${encounter.id}`);
    }

    return { ...state, [encounter.id]: encounter };
}

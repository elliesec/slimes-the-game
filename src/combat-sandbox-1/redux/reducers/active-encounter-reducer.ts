import { Action, Reducer } from 'redux';
import { Encounter } from '../../model/Encounter';
import { EncounterActions } from '../actions/encounter-actions';
import { PayloadAction } from '../redux-utils';
import { ActiveEncounter } from '../store';

const reducers: Record<string, Reducer<ActiveEncounter>> = {
    [EncounterActions.START_ENCOUNTER]: startEncounterReducer,
};

export function activeEncounterReducer(
    activeEncounter: ActiveEncounter = null,
    action: Action
): ActiveEncounter {
    const reducer = reducers[action.type];
    return reducer ? reducer(activeEncounter, action) : activeEncounter;
}

function startEncounterReducer(
    activeEncounter: ActiveEncounter,
    { payload }: PayloadAction<Encounter>
): ActiveEncounter {
    return {
        encounter: payload,
        stage: payload.initialStageId,
    };
}

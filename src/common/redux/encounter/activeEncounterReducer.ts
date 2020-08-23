import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { ActiveEncounter } from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';
import { EncounterAction } from './encounterActions';

function defaultActiveEncounter(): ActiveEncounter {
    return { encounter: null, stage: null };
}

const reducers: Record<string, Reducer<ActiveEncounter>> = {
    [EncounterAction.START]: encounterStartReducer,
    [EncounterAction.RESET]: encounterResetReducer,
};

export function activeEncounterReducer(
    state: ActiveEncounter = defaultActiveEncounter(),
    action: Action
): ActiveEncounter {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

function encounterStartReducer(
    state: ActiveEncounter,
    action: PayloadAction<Encounter>
): ActiveEncounter {
    const encounter = action.payload;
    if (encounter) {
        const stage = encounter.stages.find((s) => s.id === encounter.entryStage);
        if (stage) {
            return { encounter, stage };
        }
    }
    return state;
}

function encounterResetReducer(): ActiveEncounter {
    return defaultActiveEncounter();
}

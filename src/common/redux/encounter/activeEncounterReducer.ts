import { Action } from 'redux';
import { ActiveEncounter } from '../../model/encounter/ActiveEncounter';

function defaultActiveEncounter(): ActiveEncounter {
    return {};
}

export function activeEncounterReducer(
    state: ActiveEncounter = defaultActiveEncounter(),
    action: Action
): ActiveEncounter {
    return state;
}

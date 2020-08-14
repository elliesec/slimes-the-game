import { PayloadAction } from '../redux-utils';

export enum ActiveEncounterActions {
    START_ENCOUNTER = 'START_ENCOUNTER',
}

export function startEncounter(encounterId: string): PayloadAction<string> {
    return {
        type: ActiveEncounterActions.START_ENCOUNTER,
        payload: encounterId,
    };
}

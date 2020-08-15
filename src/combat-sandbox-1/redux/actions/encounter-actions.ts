import { Encounter } from '../../model/Encounter';
import { PayloadAction } from '../redux-utils';

export enum EncounterActions {
    REGISTER_ENCOUNTER = 'REGISTER_ENCOUNTER',
    START_ENCOUNTER = 'START_ENCOUNTER',
}

export function registerEncounter(
    encounter: Encounter
): PayloadAction<Encounter> {
    return { type: EncounterActions.REGISTER_ENCOUNTER, payload: encounter };
}

export function startEncounter(encounter: Encounter): PayloadAction<Encounter> {
    return { type: EncounterActions.START_ENCOUNTER, payload: encounter };
}

import { Action } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { Encounter } from '../../model/encounter/Encounter';

export enum EncounterAction {
    REGISTER = 'ENCOUNTER_REGISTER',
    START = 'ENCOUNTER_START',
    RESET = 'ENCOUNTER_RESET',
}

export function encounterRegister(encounter: Encounter): PayloadAction<Encounter> {
    return { type: EncounterAction.REGISTER, payload: encounter };
}

export function encounterStart(encounter: Encounter): PayloadAction<Encounter> {
    return { type: EncounterAction.START, payload: encounter };
}

export function encounterReset(): Action {
    return { type: EncounterAction.RESET };
}

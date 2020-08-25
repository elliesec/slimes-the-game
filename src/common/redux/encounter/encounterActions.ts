import { Action } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { StageState } from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';
import { EncounterChoice } from '../../model/encounter/EncounterChoice';

export enum EncounterAction {
    REGISTER = 'ENCOUNTER_REGISTER',
    START = 'ENCOUNTER_START',
    RESET = 'ENCOUNTER_RESET',
    SELECT_CHOICE = 'ENCOUNTER_SELECT_CHOICE',
    SET_STAGE_STATE = 'ENCOUNTER_SET_STAGE_STATE',
    END = 'ENCOUNTER_END',
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

export function encounterSelectChoice(choice: EncounterChoice): PayloadAction<EncounterChoice> {
    return { type: EncounterAction.SELECT_CHOICE, payload: choice };
}

export function setStageState(state: StageState): PayloadAction<StageState> {
    return { type: EncounterAction.SET_STAGE_STATE, payload: state };
}

export function encounterEnd(): Action {
    return { type: EncounterAction.END };
}

import { Action } from 'redux';
import { Player } from '../../../combat-sandbox-1/Player';
import { roll } from '../../math/mathUtils';
import { StageState } from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';
import { EncounterChoice } from '../../model/encounter/EncounterChoice';
import { PayloadAction } from '../reduxUtils';

export enum EncounterAction {
    REGISTER = 'ENCOUNTER_REGISTER',
    START = 'ENCOUNTER_START',
    RESET = 'ENCOUNTER_RESET',
    SELECT_CHOICE = 'ENCOUNTER_SELECT_CHOICE',
    SET_STAGE_STATE = 'ENCOUNTER_SET_STAGE_STATE',
    END = 'ENCOUNTER_END',
    ROLL = 'ENCOUNTER_ROLL',
    ROLL_CONTINUE = 'ENCOUNTER_ROLL_CONTINUE',
    SET_STAGE = 'SET_STAGE',
}

export interface EncounterRollDef {
    roll: number;
    cost: number;
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

export function encounterRoll(
    cost: number,
    dieFaces = 20,
    dieCount = 1
): PayloadAction<EncounterRollDef> {
    return { type: EncounterAction.ROLL, payload: { roll: roll(dieCount, dieFaces), cost } };
}

export function encounterRollContinue(player: Player): PayloadAction<Player> {
    return { type: EncounterAction.ROLL_CONTINUE, payload: player };
}

export function encounterSetStage(stageId: string): PayloadAction<string> {
    return { type: EncounterAction.SET_STAGE, payload: stageId };
}

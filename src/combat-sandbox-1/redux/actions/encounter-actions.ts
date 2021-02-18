import { PayloadAction } from '../../../common/redux/reduxUtils';
import { Encounter } from '../../model/Encounter';
import { EncounterOption } from '../../model/EncounterOption';
import { OptionsEncounterStage } from '../../model/EncounterStage';

export interface EncounterStageAndOption {
    stage: OptionsEncounterStage;
    option: EncounterOption;
}

export interface EncounterRollCall {
    dieFaces: number;
    cost: number;
}

export enum EncounterActions {
    REGISTER_ENCOUNTER = 'REGISTER_ENCOUNTER',
    START_ENCOUNTER = 'START_ENCOUNTER',
    SELECT_ENCOUNTER_OPTION = 'SELECT_ENCOUNTER_OPTION',
    ACTIVE_ENCOUNTER_ROLL = 'ACTIVE_ENCOUNTER_ROLL',
    SET_ENCOUNTER_STAGE = 'SET_ENCOUNTER_STAGE',
}

export function registerEncounter(encounter: Encounter): PayloadAction<Encounter> {
    return { type: EncounterActions.REGISTER_ENCOUNTER, payload: encounter };
}

export function startEncounter(encounter: Encounter): PayloadAction<Encounter> {
    return { type: EncounterActions.START_ENCOUNTER, payload: encounter };
}

export function selectEncounterOption(
    stage: OptionsEncounterStage,
    option: EncounterOption
): PayloadAction<EncounterStageAndOption> {
    return { type: EncounterActions.SELECT_ENCOUNTER_OPTION, payload: { stage, option } };
}

export function activeEncounterRoll(
    dieFaces: number,
    willpowerCost: number
): PayloadAction<EncounterRollCall> {
    return {
        type: EncounterActions.ACTIVE_ENCOUNTER_ROLL,
        payload: { dieFaces, cost: willpowerCost },
    };
}

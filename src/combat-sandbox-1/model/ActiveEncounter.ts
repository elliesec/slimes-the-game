import { Encounter } from './Encounter';
import { EncounterOption } from './EncounterOption';

export enum EncounterStageState {
    INIT = 'INIT',
    ROLL = 'ROLL',
}

export interface ActiveEncounterStageBase {
    id: number;
    state: EncounterStageState;
}

export interface ActiveEncounterInitStage extends ActiveEncounterStageBase {
    state: EncounterStageState.INIT;
}

export interface ActiveEncounterRollStage extends ActiveEncounterStageBase {
    state: EncounterStageState.ROLL;
    option: EncounterOption;
    rolls: number[];
}

export type ActiveEncounterStage = ActiveEncounterInitStage | ActiveEncounterRollStage;

export interface ActiveEncounter {
    encounter: Encounter;
    stage: ActiveEncounterStage;
}

export function isInitStageState(stage: ActiveEncounterStage): stage is ActiveEncounterInitStage {
    return stage.state === EncounterStageState.INIT;
}

export function isRollStageState(stage: ActiveEncounterStage): stage is ActiveEncounterRollStage {
    return stage.state === EncounterStageState.ROLL;
}

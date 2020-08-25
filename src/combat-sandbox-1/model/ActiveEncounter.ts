import { Encounter } from './Encounter';
import { EncounterOption, FlavourOption } from './EncounterOption';
import { EncounterStage } from './EncounterStage';

export enum EncounterStageState {
    INIT = 'INIT',
    ROLL = 'ROLL',
    FLAVOUR = 'FLAVOUR',
}

export interface ActiveEncounterStageBase {
    id: number;
    stage: EncounterStage;
    state: EncounterStageState;
}

export interface ActiveEncounterInitStage extends ActiveEncounterStageBase {
    state: EncounterStageState.INIT;
}

export interface ActiveEncounterFlavourStage extends ActiveEncounterStageBase {
    state: EncounterStageState.FLAVOUR;
    option: FlavourOption;
}

export interface ActiveEncounterRollStage extends ActiveEncounterStageBase {
    state: EncounterStageState.ROLL;
    option: EncounterOption;
    rolls: number[];
}

export type ActiveEncounterStage =
    | ActiveEncounterInitStage
    | ActiveEncounterRollStage
    | ActiveEncounterFlavourStage;

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

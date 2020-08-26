import { Encounter } from './Encounter';
import { EncounterChoice } from './EncounterChoice';
import { EncounterOutcome } from './EncounterOutcome';
import { EncounterStage } from './EncounterStage';

export enum StageState {
    INIT = 'INIT',
    PICKED = 'PICKED',
}

export enum RollState {
    INIT = 'INIT',
    ROLLED = 'ROLLED',
}

export enum RollOutcomeType {
    CRITICAL_SUCCESS = 'Critical Success',
    SUCCESS = 'Success',
    FAILURE = 'Failure',
    CRITICAL_FAILURE = 'Critical Failure',
}

export interface ActiveEncounter {
    encounter: Encounter;
    stage: EncounterStage;
    stageState: StageState;
    choice?: EncounterChoice;
    rolls?: number[];
    rollState?: RollState;
    rollOutcome?: EncounterOutcome;
    rollOutcomeType?: RollOutcomeType;
    rollTotal?: number;
}

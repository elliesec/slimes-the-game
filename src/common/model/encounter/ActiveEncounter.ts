import { Encounter } from './Encounter';
import { EncounterChoice } from './EncounterChoice';
import { EncounterStage } from './EncounterStage';

export enum StageState {
    INIT = 'INIT',
    PICKED = 'PICKED',
}

export interface ActiveEncounter {
    encounter: Encounter;
    stage: EncounterStage;
    stageState: StageState;
    choice?: EncounterChoice;
}

import { Encounter } from './Encounter';
import { EncounterStage } from './EncounterStage';

export interface ActiveEncounter {
    encounter: Encounter;
    stage: EncounterStage;
}

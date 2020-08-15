import { EncounterStage } from './EncounterStage';

export interface Encounter {
    id: string;
    name: string;
    stages: EncounterStage[];
    initialStageId: number;
}

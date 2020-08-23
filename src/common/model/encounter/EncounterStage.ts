import { WithId, WithText } from './Encounter';

export enum EncounterStageType {
    CHOICE = 'CHOICE',
}

export interface EncounterStage extends WithId, WithText {
    type: EncounterStageType;
}

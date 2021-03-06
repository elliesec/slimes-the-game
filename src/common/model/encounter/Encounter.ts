import { EncounterStage } from './EncounterStage';

export interface WithId {
    id: string;
}

export interface WithName {
    name: string;
}

export interface WithText {
    text: string[];
}

export interface Encounter extends WithId, WithName {
    stages: EncounterStage[];
    entryStage: string;
}

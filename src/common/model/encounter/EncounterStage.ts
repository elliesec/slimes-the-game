import { WithId, WithText } from './Encounter';
import { EncounterChoice } from './EncounterChoice';

export enum EncounterStageType {
    CHOICE = 'CHOICE',
}

export interface EncounterStageBase extends WithId, WithText {
    type: EncounterStageType;
}

export interface ChoicesStage extends EncounterStageBase {
    type: EncounterStageType.CHOICE;
    choices: EncounterChoice[];
}

export type EncounterStage = ChoicesStage;

export function instanceOfChoicesStage(stage: EncounterStage): stage is ChoicesStage {
    return stage.type === EncounterStageType.CHOICE;
}

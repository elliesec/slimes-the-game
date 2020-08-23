import { WithId, WithText } from './Encounter';
import { EncounterChoice } from './EncounterChoice';

export enum EncounterStageType {
    CHOICE = 'CHOICE',
}

export interface EncounterStageBase extends WithId, WithText {
    type: EncounterStageType;
}

export interface ChoiceStage extends EncounterStageBase {
    type: EncounterStageType.CHOICE;
    choices: EncounterChoice[];
}

export type EncounterStage = ChoiceStage;

export function instanceOfChoicesStage(stage: EncounterStage): stage is ChoiceStage {
    return stage.type === EncounterStageType.CHOICE;
}

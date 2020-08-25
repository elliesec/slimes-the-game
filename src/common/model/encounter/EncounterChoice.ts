import { Stat } from '../../../combat-sandbox-1/Player';
import { WithText } from './Encounter';

export enum ChoiceType {
    END_ENCOUNTER = 'END_ENCOUNTER',
    ROLL = 'ROLL',
}

export type ChoiceRequirements = Partial<Record<Stat, number>>;

export interface EncounterChoiceBase {
    type: ChoiceType;
    description: string;
    requirements?: ChoiceRequirements;
}

export interface EndEncounterChoice extends EncounterChoiceBase, WithText {
    type: ChoiceType.END_ENCOUNTER;
    continueText: string;
}

export interface RollChoice extends EncounterChoiceBase {
    type: ChoiceType.ROLL;
}

export type EncounterChoice = EndEncounterChoice | RollChoice;

export function instanceOfEndEncounterChoice(
    choice: EncounterChoice
): choice is EndEncounterChoice {
    return choice.type === ChoiceType.END_ENCOUNTER;
}

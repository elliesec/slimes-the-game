import { Stat } from '../../../combat-sandbox-1/Player';
import { WithText } from './Encounter';
import { EncounterOutcome } from './EncounterOutcome';

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
    dc: number;
    outcomes: {
        criticalSuccess?: EncounterOutcome;
        success: EncounterOutcome;
        failure: EncounterOutcome;
        criticalFailure?: EncounterOutcome;
    };
}

export type EncounterChoice = EndEncounterChoice | RollChoice;

export function instanceOfEndEncounterChoice(
    choice: EncounterChoice
): choice is EndEncounterChoice {
    return choice.type === ChoiceType.END_ENCOUNTER;
}

export function instanceofRollChoice(choice: EncounterChoice): choice is RollChoice {
    return choice.type === ChoiceType.ROLL;
}

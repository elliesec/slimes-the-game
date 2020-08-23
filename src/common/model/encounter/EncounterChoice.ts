import { WithText } from './Encounter';

export enum ChoiceType {
    END_ENCOUNTER = 'END_ENCOUNTER',
}

export interface EncounterChoiceBase extends WithText {
    type: ChoiceType;
    description: string;
}

export interface EndEncounterChoice extends EncounterChoiceBase {
    type: ChoiceType.END_ENCOUNTER;
}

export type EncounterChoice = EndEncounterChoice;

export function instanceOfEndEncounterChoice(
    choice: EncounterChoice
): choice is EndEncounterChoice {
    return choice.type === ChoiceType.END_ENCOUNTER;
}

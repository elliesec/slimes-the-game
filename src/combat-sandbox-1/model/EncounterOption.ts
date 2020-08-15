import { Stat } from '../Player';

export enum EncounterOptionType {
    DIFFICULTY_CHECK = 'difficultyCheck',
    FLAVOUR = 'flavour',
}

export type OptionRequirements = Partial<Record<Stat, number>>;

export interface EncounterOptionBase {
    type: EncounterOptionType;
    text: string;
}

export interface DifficultyCheckOptionOutcome {
    text: string[];
}

export interface DifficultyCheckOptionOutcomes {
    criticalSuccess: DifficultyCheckOptionOutcome;
    success: DifficultyCheckOptionOutcome;
    failure: DifficultyCheckOptionOutcome;
    criticalFailure: DifficultyCheckOptionOutcome;
}

export interface DifficultyCheckOption extends EncounterOptionBase {
    type: EncounterOptionType.DIFFICULTY_CHECK;
    requirements?: OptionRequirements;
    difficultyCheck: number;
    outcomes: DifficultyCheckOptionOutcomes;
}

export interface FlavourOption extends EncounterOptionBase {
    type: EncounterOptionType.FLAVOUR;
    nextStageId: number;
}

export type EncounterOption = DifficultyCheckOption | FlavourOption;

export function instanceOfDifficultyCheckOption(
    option: EncounterOption
): option is DifficultyCheckOption {
    return option.type === EncounterOptionType.DIFFICULTY_CHECK;
}

export function instanceOfFlavourOption(option: EncounterOption): option is FlavourOption {
    return option.type === EncounterOptionType.FLAVOUR;
}

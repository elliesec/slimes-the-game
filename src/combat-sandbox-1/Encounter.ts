export interface OptionRequirements {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    wisdom?: number;
    intelligence?: number;
    charisma?: number;
}

export interface EncounterOptionBase {
    text: string;
}

export interface DifficultyCheckOptionOutcome {}

export interface DifficultyCheckOptionOutcomes {
    criticalFailure: DifficultyCheckOptionOutcome;
    failure: DifficultyCheckOptionOutcome;
    success: DifficultyCheckOptionOutcome;
    criticalSuccess: DifficultyCheckOptionOutcome;
}

export interface DifficultyCheckOption extends EncounterOptionBase {
    requirements?: OptionRequirements;
    difficultyCheck: number;
    outcomes: DifficultyCheckOptionOutcome;
}

export interface NextStageOption extends EncounterOptionBase {
    nextStageId: number;
}

export type EncounterOption = DifficultyCheckOption | NextStageOption;

export interface EncounterStage {
    id: number;
    text: string;
    options: EncounterOption[];
}

export interface Encounter {
    id: string;
    name: string;
    stages: EncounterStage[];
    initialStageId: number;
}

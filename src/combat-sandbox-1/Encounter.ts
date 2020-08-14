export interface OptionRequirements {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    wisdom?: number;
    intelligence?: number;
    charisma?: number;
}

export enum EncounterStageType {
    OPTIONS = 'options',
    FLAVOUR = 'flavour',
    END_SCENE = 'endScene',
}

export enum StageOptionType {
    DIFFICULTY_CHECK = 'difficultyCheck',
    FLAVOUR = 'flavour',
}

export interface EncounterOptionBase {
    type: StageOptionType;
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
    type: StageOptionType.DIFFICULTY_CHECK;
    requirements?: OptionRequirements;
    difficultyCheck: number;
    outcomes: DifficultyCheckOptionOutcome;
}

export interface FlavourOption extends EncounterOptionBase {
    type: StageOptionType.FLAVOUR;
    nextStageId: number;
}

export type EncounterOption = DifficultyCheckOption | FlavourOption;

export interface EncounterStageBase {
    id: number;
    type: EncounterStageType;
    text: string[];
}

export interface OptionsEncounterStage extends EncounterStageBase {
    type: EncounterStageType.OPTIONS;
    options: EncounterOption[];
}

export interface FlavourEncounterStage extends EncounterStageBase {
    type: EncounterStageType.FLAVOUR;
    continueText: string;
    nextStageId: number;
}

export interface EndSceneEncounterStage extends EncounterStageBase {
    type: EncounterStageType.END_SCENE;
    continueText: string;
}

export type EncounterStage =
    | OptionsEncounterStage
    | FlavourEncounterStage
    | EndSceneEncounterStage;

export interface Encounter {
    id: string;
    name: string;
    stages: EncounterStage[];
    initialStageId: number;
}

export function instanceOfDifficultyCheckOption(
    option: EncounterOption
): option is DifficultyCheckOption {
    return option.type === StageOptionType.DIFFICULTY_CHECK;
}

export function instanceOfFlavourOption(
    option: EncounterOption
): option is FlavourOption {
    return option.type === StageOptionType.FLAVOUR;
}

export function instanceOfOptionsEncounterStage(
    stage: EncounterStage
): stage is OptionsEncounterStage {
    return stage.type === EncounterStageType.OPTIONS;
}

export function instanceOfFlavourEncounterStage(
    stage: EncounterStage
): stage is FlavourEncounterStage {
    return stage.type === EncounterStageType.FLAVOUR;
}

export function instanceOfEndSceneEncounterStage(
    stage: EncounterStage
): stage is EndSceneEncounterStage {
    return stage.type === EncounterStageType.END_SCENE;
}

import { EncounterOption } from './EncounterOption';

export enum EncounterStageType {
    OPTIONS = 'options',
    FLAVOUR = 'flavour',
    END_SCENE = 'endScene',
}

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

export type EncounterStage = OptionsEncounterStage | FlavourEncounterStage | EndSceneEncounterStage;

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

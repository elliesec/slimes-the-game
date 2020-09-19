import { WithText } from './Encounter';

export enum OutcomeType {
    NEXT_STAGE = 'NEXT_STAGE',
    END_ENCOUNTER = 'END_ENCOUNTER',
}

export interface EncounterOutcomeBase extends WithText {
    type: OutcomeType;
    continueText: string;
}

export interface NextStageOutcome extends EncounterOutcomeBase {
    type: OutcomeType.NEXT_STAGE;
    nextStageId: string;
}

export interface EndEncounterOutcome extends EncounterOutcomeBase {
    type: OutcomeType.END_ENCOUNTER;
}

export type EncounterOutcome = NextStageOutcome | EndEncounterOutcome;

export function instanceOfNextStageOutcome(outcome: EncounterOutcome): outcome is NextStageOutcome {
    return outcome.type === OutcomeType.NEXT_STAGE;
}

export function instanceOfEndEncounterOutcome(
    outcome: EncounterOutcome
): outcome is EndEncounterOutcome {
    return outcome.type === OutcomeType.END_ENCOUNTER;
}

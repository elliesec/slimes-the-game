import { Action, Reducer } from 'redux';
import { Player } from '../../../combat-sandbox-1/Player';
import { getRequiredStats } from '../../encounter/encounterUtils';
import {
    ActiveEncounter,
    RollOutcomeType,
    RollState,
    StageState,
} from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';
import {
    ChoiceType,
    EncounterChoice,
    instanceofRollChoice,
} from '../../model/encounter/EncounterChoice';
import { EncounterOutcome } from '../../model/encounter/EncounterOutcome';
import { instanceOfChoicesStage } from '../../model/encounter/EncounterStage';
import { PayloadAction } from '../reduxUtils';
import { EncounterAction, EncounterRollDef } from './encounterActions';

function defaultActiveEncounter(): ActiveEncounter {
    return { encounter: null, stage: null, stageState: null };
}

const reducers: Record<string, Reducer<ActiveEncounter>> = {
    [EncounterAction.START]: encounterStartReducer,
    [EncounterAction.RESET]: encounterResetReducer,
    [EncounterAction.SELECT_CHOICE]: encounterSelectChoiceReducer,
    [EncounterAction.SET_STAGE_STATE]: encounterSetStageStateReducer,
    [EncounterAction.ROLL]: encounterRollReducer,
    [EncounterAction.ROLL_CONTINUE]: encounterRollContinueReducer,
    [EncounterAction.SET_STAGE]: setStageReducer,
};

export function activeEncounterReducer(
    state: ActiveEncounter = defaultActiveEncounter(),
    action: Action
): ActiveEncounter {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

function encounterStartReducer(
    state: ActiveEncounter,
    action: PayloadAction<Encounter>
): ActiveEncounter {
    const encounter = action.payload;
    if (encounter) {
        const stage = encounter.stages.find((s) => s.id === encounter.entryStage);
        if (stage) {
            return { encounter, stage, stageState: StageState.INIT };
        }
    }
    return state;
}

function encounterResetReducer(): ActiveEncounter {
    return defaultActiveEncounter();
}

function encounterSelectChoiceReducer(
    state: ActiveEncounter,
    { payload }: PayloadAction<EncounterChoice>
): ActiveEncounter {
    if (
        state.stageState !== StageState.INIT ||
        !payload ||
        !instanceOfChoicesStage(state.stage) ||
        !state.stage.choices.includes(payload)
    ) {
        return state;
    }
    const newState = { ...state, stageState: StageState.PICKED, choice: payload };
    if (payload.type === ChoiceType.ROLL) {
        newState.rollState = RollState.INIT;
    }
    return newState;
}

function encounterSetStageStateReducer(
    state: ActiveEncounter,
    { payload }: PayloadAction<StageState>
): ActiveEncounter {
    if (payload !== state.stageState) {
        return { ...state, stageState: payload };
    }
    return state;
}

function encounterRollReducer(
    state: ActiveEncounter,
    { payload }: PayloadAction<EncounterRollDef>
): ActiveEncounter {
    if (payload) {
        const rolls = state.rolls ?? [];
        rolls.push(payload.roll);
        return { ...state, rolls };
    }
    return state;
}

function encounterRollContinueReducer(
    state: ActiveEncounter,
    action: PayloadAction<Player>
): ActiveEncounter {
    const { rolls, choice } = state;
    if (!instanceofRollChoice(choice)) return state;

    const player = action.payload;
    const { dc, outcomes } = choice;
    const stats = getRequiredStats(choice);
    const statSum = stats.reduce((sum, stat) => sum + player[stat], 0);
    const rollSum = rolls.reduce((sum, roll) => sum + roll, 0);
    const total = statSum + rollSum;
    let rollOutcome: EncounterOutcome;
    let rollOutcomeType: RollOutcomeType;
    if (rolls.includes(20) || total >= dc + 10) {
        rollOutcome = outcomes.criticalSuccess ?? outcomes.success;
        rollOutcomeType = outcomes.criticalSuccess
            ? RollOutcomeType.CRITICAL_SUCCESS
            : RollOutcomeType.SUCCESS;
    } else if (total < 7) {
        rollOutcome = outcomes.criticalFailure ?? outcomes.failure;
        rollOutcomeType = outcomes.criticalFailure
            ? RollOutcomeType.CRITICAL_FAILURE
            : RollOutcomeType.FAILURE;
    } else if (total >= dc) {
        rollOutcome = outcomes.success;
        rollOutcomeType = RollOutcomeType.SUCCESS;
    } else {
        rollOutcome = outcomes.failure;
        rollOutcomeType = RollOutcomeType.FAILURE;
    }
    return {
        ...state,
        rollState: RollState.ROLLED,
        rollTotal: total,
        rollOutcome,
        rollOutcomeType,
    };
}

function setStageReducer(
    state: ActiveEncounter,
    { payload }: PayloadAction<string>
): ActiveEncounter {
    if (typeof payload !== 'string' || payload === state.stage.id) {
        return state;
    }
    const newStage = state.encounter.stages.find((stage) => stage.id === payload);
    if (!newStage) {
        return state;
    }
    return {
        ...state,
        stage: newStage,
        stageState: StageState.INIT,
        rolls: [],
        rollState: null,
        rollOutcome: null,
        rollOutcomeType: null,
        rollTotal: 0,
    };
}

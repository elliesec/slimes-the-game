import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { ActiveEncounter, StageState } from '../../model/encounter/ActiveEncounter';
import { Encounter } from '../../model/encounter/Encounter';
import { EncounterChoice } from '../../model/encounter/EncounterChoice';
import { instanceOfChoicesStage } from '../../model/encounter/EncounterStage';
import { EncounterAction } from './encounterActions';

function defaultActiveEncounter(): ActiveEncounter {
    return { encounter: null, stage: null, stageState: null };
}

const reducers: Record<string, Reducer<ActiveEncounter>> = {
    [EncounterAction.START]: encounterStartReducer,
    [EncounterAction.RESET]: encounterResetReducer,
    [EncounterAction.SELECT_CHOICE]: encounterSelectChoiceReducer,
    [EncounterAction.SET_STAGE_STATE]: encounterSetStageStateReducer,
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
    return { ...state, stageState: StageState.PICKED, choice: payload };
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

import { Action, Reducer } from 'redux';
import {
    ActiveEncounter,
    ActiveEncounterInitStage,
    ActiveEncounterRollStage,
    ActiveEncounterStage,
    EncounterStageState,
} from '../../model/ActiveEncounter';
import { Encounter } from '../../model/Encounter';
import {
    DifficultyCheckOption,
    instanceOfDifficultyCheckOption,
} from '../../model/EncounterOption';
import { EncounterStage } from '../../model/EncounterStage';
import {
    EncounterActions,
    EncounterRollCall,
    EncounterStageAndOption,
} from '../actions/encounter-actions';
import { PayloadAction } from '../redux-utils';

const reducers: Record<string, Reducer<ActiveEncounter>> = {
    [EncounterActions.START_ENCOUNTER]: startEncounterReducer,
    [EncounterActions.SELECT_ENCOUNTER_OPTION]: selectEncounterOptionReducer,
    [EncounterActions.ACTIVE_ENCOUNTER_ROLL]: activeEncounterRollReducer,
};

export function activeEncounterReducer(
    activeEncounter: ActiveEncounter = null,
    action: Action
): ActiveEncounter {
    const reducer = reducers[action.type];
    return reducer ? reducer(activeEncounter, action) : activeEncounter;
}

function startEncounterReducer(
    activeEncounter: ActiveEncounter,
    { payload }: PayloadAction<Encounter>
): ActiveEncounter {
    return {
        encounter: payload,
        stage: createEncounterInitStage(payload.initialStageId),
    };
}

function selectEncounterOptionReducer(
    activeEncounter: ActiveEncounter,
    { payload }: PayloadAction<EncounterStageAndOption>
): ActiveEncounter {
    const { stage, option } = payload;
    let newStageState: ActiveEncounterStage;
    if (instanceOfDifficultyCheckOption(option)) {
        newStageState = createEncounterRollStage(stage, option);
    } else {
        console.warn('Unhandled option type:', option.type);
        newStageState = null;
    }
    return {
        ...activeEncounter,
        stage: newStageState,
    };
}

function activeEncounterRollReducer(
    activeEncounter: ActiveEncounter,
    { payload: { dieFaces } }: PayloadAction<EncounterRollCall>
): ActiveEncounter {
    const roll = 1 + Math.floor(Math.random() * dieFaces);
    const stage = activeEncounter.stage as ActiveEncounterRollStage;
    return {
        ...activeEncounter,
        stage: {
            ...stage,
            rolls: [...stage.rolls, roll],
        },
    };
}

function createEncounterInitStage(stageId: number): ActiveEncounterInitStage {
    return {
        id: stageId,
        state: EncounterStageState.INIT,
    };
}

function createEncounterRollStage(
    stage: EncounterStage,
    option: DifficultyCheckOption
): ActiveEncounterRollStage {
    return {
        id: stage.id,
        state: EncounterStageState.ROLL,
        option,
        rolls: [],
    };
}

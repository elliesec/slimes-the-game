import { ComponentType, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { ActiveEncounter } from '../../../common/model/encounter/ActiveEncounter';
import {
    EncounterStage,
    instanceOfChoicesStage,
} from '../../../common/model/encounter/EncounterStage';
import { State } from '../../redux/store';
import { ChoicesStageView } from './stageTypes/ChoicesStageView';

export interface StageTypeViewProps {
    activeEncounter: ActiveEncounter;
}

export interface StageViewProps<S extends EncounterStage> {
    stage: S;
}

function getStageView<S extends EncounterStage>(
    stage: EncounterStage
): ComponentType<StageViewProps<S>> {
    if (instanceOfChoicesStage(stage)) return ChoicesStageView;
    return null;
}

const render = ({ activeEncounter }: StageTypeViewProps): VNode => {
    const StageView = getStageView(activeEncounter.stage);
    return StageView ? <StageView stage={activeEncounter.stage} /> : null;
};

function mapStateToProps(state: State): Partial<StageTypeViewProps> {
    return { activeEncounter: state.encounter.active };
}

export const StageTypeView = connect(mapStateToProps)(render);

import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { ActiveEncounter } from '../../../common/model/encounter/ActiveEncounter';
import { EncounterStageType } from '../../../common/model/encounter/EncounterStage';
import { State } from '../../redux/store';
import { OptionsStageView } from './stageTypes/OptionsStageView';

export interface StageTypeViewProps {
    activeEncounter: ActiveEncounter;
}

const render = ({ activeEncounter }: StageTypeViewProps): VNode => {
    switch (activeEncounter.stage.type) {
        case EncounterStageType.CHOICE:
            return <OptionsStageView />;
        default:
            return null;
    }
};

function mapStateToProps(state: State): Partial<StageTypeViewProps> {
    return { activeEncounter: state.encounter.active };
}

export const StageTypeView = connect(mapStateToProps)(render);

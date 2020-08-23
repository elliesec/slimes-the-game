import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { ActiveEncounter } from '../../../common/model/encounter/ActiveEncounter';
import { State } from '../../redux/store';
import { EncounterStageText } from './EncounterStageText';

export interface EncounterStageViewProps {
    activeEncounter: ActiveEncounter;
}

const render = ({ activeEncounter }: EncounterStageViewProps): VNode => (
    <div className="EncounterStageView">
        <EncounterStageText text={activeEncounter.stage.text} />
    </div>
);

function mapStateToProps(state: State): Partial<EncounterStageViewProps> {
    return { activeEncounter: state.encounter.active };
}

export const EncounterStageView = connect(mapStateToProps)(render);

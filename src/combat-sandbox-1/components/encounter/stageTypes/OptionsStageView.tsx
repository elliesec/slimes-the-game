import { h } from 'preact';
import { connect } from 'react-redux';
import { ActiveEncounter } from '../../../../common/model/encounter/ActiveEncounter';
import { State } from '../../../redux/store';

export interface OptionsStageViewProps {
    activeEncounter: ActiveEncounter;
}

const render = ({ activeEncounter }: OptionsStageViewProps) => (
    <div className="OptionsStageView">
        Options Stage View
        <pre>{JSON.stringify(activeEncounter.stage, null, 4)}</pre>
    </div>
);

function mapStateToProps(state: State): Partial<OptionsStageViewProps> {
    return { activeEncounter: state.encounter.active };
}

export const OptionsStageView = connect(mapStateToProps)(render);

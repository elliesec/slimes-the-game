import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { State } from '../../redux/store';
import { EncounterStageView } from './EncounterStageView';

export interface EncounterViewProps {}

const render = (props: EncounterViewProps): VNode => (
    <div className="EncounterView">
        <EncounterStageView />
    </div>
);

function mapStateToProps(state: State): Partial<EncounterViewProps> {
    return {};
}

export const EncounterView = connect(mapStateToProps)(render);

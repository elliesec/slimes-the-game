import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { State } from '../../redux/store';
import { EncounterStageView } from './EncounterStageView';
import './EncounterView.scss';

const mimic = require('../../assets/mimic.jpg');

export interface EncounterViewProps {}

const render = (props: EncounterViewProps): VNode => (
    <div className="EncounterView">
        <EncounterStageView />
        <img src={mimic} alt="A mimic" />
    </div>
);

function mapStateToProps(state: State): Partial<EncounterViewProps> {
    return {};
}

export const EncounterView = connect(mapStateToProps)(render);

import { h } from 'preact';
import { connect } from 'react-redux';
import { ActiveEncounter } from '../../../../common/model/encounter/ActiveEncounter';
import { ChoiceStage } from '../../../../common/model/encounter/EncounterStage';
import { State } from '../../../redux/store';
import { ChoiceItem } from './ChoiceItem';

export interface ChoicesStageViewProps {
    activeEncounter: ActiveEncounter;
    stage: ChoiceStage;
}

const render = ({ activeEncounter, stage }: ChoicesStageViewProps) => (
    <ul className="ChoicesStageView">
        {stage.choices.map((choice) => (
            <ChoiceItem choice={choice} />
        ))}
    </ul>
);

function mapStateToProps(state: State): Partial<ChoicesStageViewProps> {
    return { activeEncounter: state.encounter.active };
}

export const ChoicesStageView = connect(mapStateToProps)(render);

import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import {
    EncounterStage,
    instanceOfOptionsEncounterStage,
} from '../../model/EncounterStage';
import { Player } from '../../Player';
import { State } from '../../redux/store';
import { OptionsStageView } from './OptionsStageView';
import './StageView.scss';

export interface ConnectedStageViewProps {
    stage: EncounterStage;
}

export interface StageViewProps extends ConnectedStageViewProps {
    player: Player;
}

const StageTypeView = ({ player, stage }: StageViewProps): VNode => {
    if (instanceOfOptionsEncounterStage(stage)) {
        return <OptionsStageView stage={stage} />;
    }
    return null;
};

export const StageView = connect(mapStateToProps)(
    ({ player, stage }: StageViewProps) => (
        <div className="StageView">
            {stage.text.map((t: string) => (
                <p>{t}</p>
            ))}
            <hr />
            <StageTypeView player={player} stage={stage} />
        </div>
    )
);

function mapStateToProps(
    { player }: State,
    ownProps: ConnectedStageViewProps
): Partial<StageViewProps> {
    return { player };
}

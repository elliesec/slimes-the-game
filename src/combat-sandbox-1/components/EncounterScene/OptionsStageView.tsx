import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { OptionsEncounterStage } from '../../model/EncounterStage';
import { Player } from '../../Player';
import { State } from '../../redux/store';
import { OptionItem } from './OptionItem';
import './OptionsStageView.scss';
import { StageViewProps } from './StageView';

export interface ConnectedOptionsStageViewProps {
    stage: OptionsEncounterStage;
}

export interface OptionsStageViewProps extends ConnectedOptionsStageViewProps {
    player: Player;
}

export const OptionsStageView = connect(mapStateToProps)(
    ({ player, stage }: OptionsStageViewProps): VNode => (
        <div className="OptionsStageView">
            <p>
                <strong>What do you do?</strong>
            </p>
            <ul className="options">
                {stage.options.map((option) => (
                    <OptionItem player={player} option={option} />
                ))}
            </ul>
        </div>
    )
);

function mapStateToProps(
    { player }: State,
    ownProps: ConnectedOptionsStageViewProps
): Partial<StageViewProps> {
    return { player };
}

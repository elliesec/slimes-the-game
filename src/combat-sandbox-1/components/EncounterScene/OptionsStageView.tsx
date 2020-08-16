import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Callback, noop } from '../../../common/functions';
import {
    ActiveEncounterRollStage,
    ActiveEncounterStage,
    isInitStageState,
    isRollStageState,
} from '../../model/ActiveEncounter';
import { EncounterOption } from '../../model/EncounterOption';
import { OptionsEncounterStage } from '../../model/EncounterStage';
import { Player } from '../../Player';
import { activeEncounterRoll, selectEncounterOption } from '../../redux/actions/encounter-actions';
import { State } from '../../redux/store';
import { OptionItem } from './OptionItem';
import './OptionsStageView.scss';
import { RollDisplay } from './RollDisplay';

export interface ConnectedOptionsStageViewProps {
    stage: OptionsEncounterStage;
}

export interface OptionsStageViewProps extends ConnectedOptionsStageViewProps {
    player: Player;
    activeEncounterStage: ActiveEncounterStage;
    onOptionSelect: Callback<EncounterOption>;
    onRoll: (dieFaces: number, willpowerCost: number) => void;
}

const InitStateView = ({ player, stage, onOptionSelect }: OptionsStageViewProps): VNode => {
    return (
        <div className="InitStateView">
            <p>
                <strong>What do you do?</strong>
            </p>
            <ul className="options">
                {stage.options.map((option) => (
                    <OptionItem player={player} option={option} onClick={onOptionSelect} />
                ))}
            </ul>
        </div>
    );
};

const RollStateView = ({ player, activeEncounterStage, onRoll }: OptionsStageViewProps): VNode => {
    const stage = activeEncounterStage as ActiveEncounterRollStage;
    return (
        <div className="RollStateView">
            <ul>
                <OptionItem player={player} option={stage.option} onClick={noop} fixed />
            </ul>
            <RollDisplay player={player} stage={stage} />
            <div className="buttons">
                <button
                    disabled={!!stage.rolls.length && player.willpower < 1}
                    onClick={() => onRoll(20, stage.rolls.length ? 1 : 0)}
                >{`Roll${stage.rolls.length ? ' (1 willpower)' : ''}`}</button>
                {!!stage.rolls.length && <button>Accept</button>}
            </div>
        </div>
    );
};

export const OptionsStageView = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    (props: OptionsStageViewProps): VNode => (
        <div className="OptionsStageView">
            {isInitStageState(props.activeEncounterStage) && <InitStateView {...props} />}
            {isRollStageState(props.activeEncounterStage) && <RollStateView {...props} />}
        </div>
    )
);

function mapStateToProps(
    { player, encounter }: State,
    ownProps: ConnectedOptionsStageViewProps
): Partial<OptionsStageViewProps> {
    return { player, activeEncounterStage: encounter.active.stage };
}

function mapDispatchToProps(
    dispatch: Dispatch,
    { stage }: ConnectedOptionsStageViewProps
): Partial<OptionsStageViewProps> {
    return {
        onOptionSelect(option: EncounterOption): void {
            dispatch(selectEncounterOption(stage, option));
        },
        onRoll(dieFaces: number, willpowerCost: number): void {
            dispatch(activeEncounterRoll(dieFaces, willpowerCost));
        },
    };
}

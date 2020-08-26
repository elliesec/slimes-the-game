import classNames from 'classnames';
import { h, VNode } from 'preact';
import { useCallback } from 'preact/hooks';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getRequiredStats, getStatName } from '../../../../common/encounter/encounterUtils';
import { Callback } from '../../../../common/functions';
import { ActiveEncounter, RollState } from '../../../../common/model/encounter/ActiveEncounter';
import { RollChoice } from '../../../../common/model/encounter/EncounterChoice';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import {
    encounterRoll,
    encounterRollContinue,
} from '../../../../common/redux/encounter/encounterActions';
import { Player } from '../../../Player';
import { State } from '../../../redux/store';
import { ChoiceItemList } from '../ChoiceItemList/ChoiceItemList';
import './RollChoiceView.scss';

export interface RollChoiceViewWrapperProps {
    stage: ChoicesStage;
    choice: RollChoice;
}

export interface RollChoiceViewProps extends RollChoiceViewWrapperProps {
    player: Player;
    activeEncounter: ActiveEncounter;
    onRoll: Callback<number>;
    onContinue: Callback<Player>;
}

const renderInitView = ({
    player,
    activeEncounter,
    choice,
    onRoll,
    onContinue,
}: RollChoiceViewProps): VNode => {
    const rolls = activeEncounter.rolls ?? [];
    const canContinue = !!rolls.length;
    const rollCost = rolls.length ? 1 : 0;
    const canRoll = !rolls.length || player.willpower > 0;
    const rollCallback = useCallback(() => onRoll(rollCost), [rollCost]);
    const stats = getRequiredStats(choice);
    const statSum = stats.reduce((s, stat) => s + choice.requirements[stat], 0);
    const rollSum = rolls.reduce((s, roll) => s + roll, 0);
    const continueCallback = useCallback(() => onContinue(player), [player]);
    return (
        <div className="RollChoiceView">
            <ChoiceItemList player={player} choices={[choice]} fixed />
            <div className="buttons">
                {canContinue && (
                    <button className="primary" onClick={continueCallback}>
                        Continue
                    </button>
                )}
                <button
                    className={classNames({ primary: !rollCost })}
                    disabled={!canRoll}
                    onClick={rollCallback}
                >
                    {`Roll${rollCost ? ' [1 WIL]' : ''}`}
                </button>
            </div>
            <table className="roll-table">
                <tbody>
                    {stats.map((stat) => (
                        <tr>
                            <th>{getStatName(stat)}</th>
                            <td>{choice.requirements[stat]}</td>
                        </tr>
                    ))}
                    {rolls.map((roll, i) => (
                        <tr>
                            <th>Roll {i + 1}</th>
                            <td>{roll}</td>
                        </tr>
                    ))}
                    <tr className="sum-row">
                        <th>Total</th>
                        <td>{statSum + rollSum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const renderRolledView = ({ player, activeEncounter, choice }: RollChoiceViewProps): VNode => {
    return (
        <div className="RollChoiceView">
            <ChoiceItemList player={player} choices={[choice]} fixed />
            <table className="roll-table">
                <tbody>
                    <tr>
                        <th>Your Roll:</th>
                        <td>{activeEncounter.rollTotal}</td>
                    </tr>
                    <tr>
                        <th>Outcome:</th>
                        <td>{activeEncounter.rollOutcomeType}</td>
                    </tr>
                </tbody>
            </table>
            {activeEncounter.rollOutcome.text.map((t) => (
                <p>{t}</p>
            ))}
        </div>
    );
};

const render = (props: RollChoiceViewProps): VNode => {
    switch (props.activeEncounter.rollState) {
        case RollState.INIT:
            return renderInitView(props);
        case RollState.ROLLED:
            return renderRolledView(props);
        default:
            return null;
    }
};

function mapStateToProps(
    state: State,
    ownProps: RollChoiceViewWrapperProps
): Partial<RollChoiceViewProps> {
    return {
        ...ownProps,
        player: state.player,
        activeEncounter: state.encounter.active,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<RollChoiceViewProps> {
    return {
        onRoll(cost): void {
            dispatch(encounterRoll(cost));
        },
        onContinue(player: Player): void {
            dispatch(encounterRollContinue(player));
        },
    };
}

export const RollChoiceView = connect(mapStateToProps, mapDispatchToProps)(render);

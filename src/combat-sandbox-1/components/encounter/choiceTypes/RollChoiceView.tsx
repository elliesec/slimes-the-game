import classNames from 'classnames';
import React, { ReactElement, useCallback } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getRequiredStats, getStatName } from '../../../../common/encounter/encounterUtils';
import { Callback } from '../../../../common/functions';
import { ActiveEncounter, RollState } from '../../../../common/model/encounter/ActiveEncounter';
import { RollChoice } from '../../../../common/model/encounter/EncounterChoice';
import {
    instanceOfEndEncounterOutcome,
    instanceOfNextStageOutcome,
} from '../../../../common/model/encounter/EncounterOutcome';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import {
    encounterEnd,
    encounterRoll,
    encounterRollContinue,
    encounterSetStage,
} from '../../../../common/redux/encounter/encounterActions';
import { Scene } from '../../../enums';
import { Player } from '../../../Player';
import { setScene } from '../../../redux/actions/game-actions';
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
    onRolledContinue: Callback<ActiveEncounter>;
}

const RollChoiceInitView = ({
    player,
    activeEncounter,
    choice,
    onRoll,
    onContinue,
}: RollChoiceViewProps): ReactElement => {
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

const RollChoiceRolledView = ({
    player,
    activeEncounter,
    choice,
    onRolledContinue,
}: RollChoiceViewProps): ReactElement => {
    const onContinueClick = useCallback(() => onRolledContinue(activeEncounter), [activeEncounter]);
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
            <button className="primary" onClick={onContinueClick}>
                {activeEncounter.rollOutcome.continueText}
            </button>
        </div>
    );
};

const render = (props: RollChoiceViewProps): ReactElement => {
    switch (props.activeEncounter.rollState) {
        case RollState.INIT:
            return <RollChoiceInitView {...props} />;
        case RollState.ROLLED:
            return <RollChoiceRolledView {...props} />;
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
        onRolledContinue({ rollOutcome }: ActiveEncounter): void {
            if (instanceOfEndEncounterOutcome(rollOutcome)) {
                dispatch(encounterEnd());
                dispatch(setScene(Scene.ENCOUNTER_END));
            } else if (instanceOfNextStageOutcome(rollOutcome)) {
                dispatch(encounterSetStage(rollOutcome.nextStageId));
            }
        },
    };
}

export const RollChoiceView = connect(mapStateToProps, mapDispatchToProps)(render);

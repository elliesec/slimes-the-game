import { h, VNode } from 'preact';
import { ActiveEncounterRollStage } from '../../model/ActiveEncounter';
import { getStatName } from '../../model/encounter-utils';
import { DifficultyCheckOption } from '../../model/EncounterOption';
import { Player, Stat } from '../../Player';
import './RollDisplay.scss';

export interface RollDisplayProps {
    player: Player;
    stage: ActiveEncounterRollStage;
}

export const RollDisplay = ({ player, stage: { option, rolls } }: RollDisplayProps): VNode => {
    const stats = Object.keys((option as DifficultyCheckOption).requirements) as Stat[];
    const rollTotal =
        stats.reduce((sum, stat) => sum + player[stat], 0) +
        rolls.reduce((sum, roll) => sum + roll, 0);
    return (
        <div className="RollDisplay">
            <h4>Roll Details</h4>
            <ul>
                {stats.map((stat: Stat) => (
                    <li>
                        <strong>Your {getStatName(stat)}: </strong>
                        <span>{player[stat]}</span>
                    </li>
                ))}
                {rolls.map((roll, i) => (
                    <li>
                        <strong>Roll {i + 1}: </strong>
                        <span>{roll}</span>
                    </li>
                ))}
                <li>
                    <strong>Roll Total: </strong>
                    <span>{rollTotal}</span>
                </li>
            </ul>
        </div>
    );
};

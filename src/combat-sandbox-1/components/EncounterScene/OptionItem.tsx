import classNames from 'classnames';
import { h, VNode } from 'preact';
import { Callback } from '../../../common/functions';
import {
    checkStatRequirement,
    getRequiredStats,
    getStatAbbreviation,
} from '../../model/encounter-utils';
import {
    DifficultyCheckOption,
    EncounterOption,
    instanceOfDifficultyCheckOption,
} from '../../model/EncounterOption';
import { Player } from '../../Player';
import './OptionItem.scss';

export interface OptionItemProps<O extends EncounterOption> {
    player: Player;
    option: O;
    onClick: Callback<O>;
    fixed?: boolean;
}

const DifficultyCheckItem = ({
    player,
    option,
    onClick,
    fixed,
}: OptionItemProps<DifficultyCheckOption>): VNode => {
    const { requirements, text } = option;
    const requiredStats = getRequiredStats(requirements);
    const statList = requiredStats.map(
        (stat) => `${getStatAbbreviation(stat)} ${requirements[stat]}`
    );
    const statText = requiredStats.length ? `[${statList.join(', ')}] ` : '';
    const failRequirement = requiredStats.some(
        (stat) => !checkStatRequirement(player, stat, requirements[stat])
    );
    return (
        <li
            className={classNames('OptionItem', 'DifficultyCheckItem', {
                disabled: failRequirement,
                fixed: !!fixed,
            })}
            tabIndex={fixed ? undefined : 0}
            onClick={() => onClick(option)}
        >
            <strong>{statText}</strong>
            <span>{text}</span>
        </li>
    );
};

export const OptionItem = ({ player, option, onClick, fixed }: OptionItemProps<any>): VNode => {
    if (instanceOfDifficultyCheckOption(option)) {
        return (
            <DifficultyCheckItem player={player} option={option} onClick={onClick} fixed={fixed} />
        );
    } else {
        return <li className="OptionItem">{option.text}</li>;
    }
};

import classNames from 'classnames';
import { h, VNode } from 'preact';
import { useCallback } from 'preact/hooks';
import {
    checkChoiceRequirements,
    getRequiredStats,
    getStatAbbreviation,
} from '../../../../common/encounter/encounterUtils';
import { Callback, noop } from '../../../../common/functions';
import { EncounterChoice } from '../../../../common/model/encounter/EncounterChoice';
import { Player } from '../../../Player';

export interface ChoiceItemProps<C extends EncounterChoice> {
    player: Player;
    choice: C;
    onSelect: Callback<C>;
    fixed?: boolean;
}

export const ChoiceItem = (props: ChoiceItemProps<EncounterChoice>): VNode => {
    const { player, choice, fixed } = props;
    let { onSelect } = props;
    const disabled = !checkChoiceRequirements(player, choice);
    if (disabled || typeof onSelect !== 'function') {
        onSelect = noop;
    }

    const onClick = useCallback(() => onSelect(choice), [choice, onSelect]);
    let requirementsText = '';
    if (choice.requirements) {
        const stats = getRequiredStats(choice);
        if (stats.length) {
            requirementsText = stats
                .map((stat) => `${choice.requirements[stat]} ${getStatAbbreviation(stat)}`)
                .join(', ');
            requirementsText = `[${requirementsText}]`;
        }
    }
    return (
        <li
            className={classNames([
                'ChoiceItem',
                'EndEncounterChoiceItem',
                {
                    fixed: !!fixed,
                    disabled,
                },
            ])}
            onClick={onClick}
        >
            <span className="requirements">{requirementsText} </span>
            <span>{choice.description}</span>
        </li>
    );
};

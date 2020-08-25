import classNames from 'classnames';
import { ComponentType, h, VNode } from 'preact';
import { useCallback } from 'preact/hooks';
import { Callback, noop } from '../../../../common/functions';
import {
    EncounterChoice,
    EndEncounterChoice,
    instanceOfEndEncounterChoice,
} from '../../../../common/model/encounter/EncounterChoice';
import './ChoiceItem.scss';

export interface ChoiceItemProps<C extends EncounterChoice> {
    choice: C;
    onSelect: Callback<C>;
    fixed?: boolean;
}

const EndEncounterChoiceItem = ({
    choice,
    onSelect,
    fixed,
}: ChoiceItemProps<EndEncounterChoice>): VNode => {
    const onClick = useCallback(() => onSelect(choice), [choice]);
    return (
        <li
            className={classNames(['ChoiceItem', 'EndEncounterChoiceItem', { fixed: !!fixed }])}
            onClick={onClick}
        >
            {choice.description}
        </li>
    );
};

export function getChoiceItem<C extends EncounterChoice>(
    choice: EncounterChoice
): ComponentType<ChoiceItemProps<C>> {
    if (instanceOfEndEncounterChoice(choice)) return EndEncounterChoiceItem;
    return null;
}

export const ChoiceItem = (props: ChoiceItemProps<EncounterChoice>): VNode => {
    const { choice, onSelect } = props;
    if (typeof onSelect !== 'function') {
        props.onSelect = noop;
    }
    const Component = getChoiceItem(choice);
    return Component ? <Component {...props} /> : null;
};

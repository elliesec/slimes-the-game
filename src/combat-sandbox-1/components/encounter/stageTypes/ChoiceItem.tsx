import { ComponentType, h, VNode } from 'preact';
import {
    EncounterChoice,
    EndEncounterChoice,
    instanceOfEndEncounterChoice,
} from '../../../../common/model/encounter/EncounterChoice';
import './ChoiceItem.scss';

export interface ChoiceItemProps<C extends EncounterChoice> {
    choice: C;
}

const EndEncounterChoiceItem = ({ choice }: ChoiceItemProps<EndEncounterChoice>): VNode => (
    <li className="ChoiceItem EndEncounterChoiceItem">{choice.description}</li>
);

export function getChoiceItem<C extends EncounterChoice>(
    choice: EncounterChoice
): ComponentType<ChoiceItemProps<C>> {
    if (instanceOfEndEncounterChoice(choice)) return EndEncounterChoiceItem;
    return null;
}

export const ChoiceItem = ({ choice }: ChoiceItemProps<EncounterChoice>): VNode => {
    const Component = getChoiceItem(choice);
    return Component ? <Component choice={choice} /> : null;
};

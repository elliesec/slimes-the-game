import { h, VNode } from 'preact';
import { Callback } from '../../../../common/functions';
import { EncounterChoice } from '../../../../common/model/encounter/EncounterChoice';
import { ChoiceItem } from './ChoiceItem';
import './ChoiceItemList.scss';

export interface ChoiceItemListProps {
    choices: EncounterChoice[];
    onSelect?: Callback<EncounterChoice>;
    fixed?: boolean;
}

export const ChoiceItemList = ({ choices, onSelect, fixed }: ChoiceItemListProps): VNode => (
    <ul className="ChoiceItemList">
        {choices.map((choice) => (
            <ChoiceItem choice={choice} onSelect={onSelect} fixed={fixed} />
        ))}
    </ul>
);

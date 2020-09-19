import React, { ReactElement } from 'react';
import { Callback } from '../../../../common/functions';
import { EncounterChoice } from '../../../../common/model/encounter/EncounterChoice';
import { Player } from '../../../Player';
import { ChoiceItem } from './ChoiceItem';
import './ChoiceItemList.scss';

export interface ChoiceItemListProps {
    player: Player;
    choices: EncounterChoice[];
    onSelect?: Callback<EncounterChoice>;
    fixed?: boolean;
}

export const ChoiceItemList = ({
    player,
    choices,
    onSelect,
    fixed,
}: ChoiceItemListProps): ReactElement => (
    <ul className="ChoiceItemList">
        {choices.map((choice) => (
            <ChoiceItem player={player} choice={choice} onSelect={onSelect} fixed={fixed} />
        ))}
    </ul>
);

import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActiveEncounter } from '../../../../common/model/encounter/ActiveEncounter';
import { EndEncounterChoice } from '../../../../common/model/encounter/EncounterChoice';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import { encounterEnd } from '../../../../common/redux/encounter/encounterActions';
import { Scene } from '../../../enums';
import { Player } from '../../../Player';
import { setScene } from '../../../redux/actions/game-actions';
import { State } from '../../../redux/store';
import { ChoiceItemList } from '../ChoiceItemList/ChoiceItemList';

export interface EndEncounterChoiceViewWrapperProps {
    stage: ChoicesStage;
    choice: EndEncounterChoice;
}

export interface EndEncounterChoiceViewProps extends EndEncounterChoiceViewWrapperProps {
    player: Player;
    activeEncounter: ActiveEncounter;
    onContinue: () => void;
}

const render = ({ player, choice, onContinue }: EndEncounterChoiceViewProps): ReactElement => (
    <div className="EndEncounterChoiceView">
        <ChoiceItemList player={player} choices={[choice]} fixed />
        {choice.text.map((t) => (
            <p>{t}</p>
        ))}
        <button className="primary" onClick={onContinue}>
            {choice.continueText}
        </button>
    </div>
);

function mapStateToProps(
    state: State,
    ownProps: EndEncounterChoiceViewWrapperProps
): Partial<EndEncounterChoiceViewProps> {
    return {
        ...ownProps,
        player: state.player,
        activeEncounter: state.encounter.active,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<EndEncounterChoiceViewProps> {
    return {
        onContinue(): void {
            dispatch(encounterEnd());
            dispatch(setScene(Scene.ENCOUNTER_END));
        },
    };
}

export const EndEncounterChoiceView = connect(mapStateToProps, mapDispatchToProps)(render);

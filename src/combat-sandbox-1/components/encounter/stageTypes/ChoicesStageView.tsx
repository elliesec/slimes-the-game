import { ComponentType, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Callback } from '../../../../common/functions';
import { ActiveEncounter, StageState } from '../../../../common/model/encounter/ActiveEncounter';
import { EncounterChoice } from '../../../../common/model/encounter/EncounterChoice';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import { encounterSelectChoice } from '../../../../common/redux/encounter/encounterActions';
import { Player } from '../../../Player';
import { State } from '../../../redux/store';
import { ChoiceItemList } from '../ChoiceItemList/ChoiceItemList';
import { PickedStateView } from './PickedStateView';

export interface ChoicesStageViewProps {
    player: Player;
    activeEncounter: ActiveEncounter;
    stage: ChoicesStage;
    onChoiceSelect?: Callback<EncounterChoice>;
}

const InitStateView = ({ player, stage, onChoiceSelect }: ChoicesStageViewProps): VNode => (
    <ChoiceItemList player={player} choices={stage.choices} onSelect={onChoiceSelect} />
);

function getStateView(state: StageState): ComponentType<ChoicesStageViewProps> {
    switch (state) {
        case StageState.INIT:
            return InitStateView;
        case StageState.PICKED:
            return PickedStateView;
        default:
            return null;
    }
}

const render = (props: ChoicesStageViewProps) => {
    const { activeEncounter } = props;
    const StateView = getStateView(activeEncounter.stageState);
    return (
        <div className="ChoicesStageView">
            <StateView {...props} />
        </div>
    );
};

function mapStateToProps(state: State): Partial<ChoicesStageViewProps> {
    return {
        player: state.player,
        activeEncounter: state.encounter.active,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<ChoicesStageViewProps> {
    return {
        onChoiceSelect(choice: EncounterChoice): void {
            dispatch(encounterSelectChoice(choice));
        },
    };
}

export const ChoicesStageView = connect(mapStateToProps, mapDispatchToProps)(render);

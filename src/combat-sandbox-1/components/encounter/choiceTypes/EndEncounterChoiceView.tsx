import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActiveEncounter } from '../../../../common/model/encounter/ActiveEncounter';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import { encounterEnd } from '../../../../common/redux/encounter/encounterActions';
import { Scene } from '../../../enums';
import { setScene } from '../../../redux/actions/game-actions';
import { State } from '../../../redux/store';
import { ChoiceItemList } from '../ChoiceItemList/ChoiceItemList';

export interface EndEncounterChoiceViewWrapperProps {
    stage: ChoicesStage;
}

export interface EndEncounterChoiceViewProps extends EndEncounterChoiceViewWrapperProps {
    activeEncounter: ActiveEncounter;
    onContinue: () => void;
}

const render = ({ activeEncounter, stage, onContinue }: EndEncounterChoiceViewProps): VNode => (
    <div className="EndEncounterChoiceView">
        <ChoiceItemList choices={[activeEncounter.choice]} fixed />
        {activeEncounter.choice.text.map((t) => (
            <p>{t}</p>
        ))}
        <button className="primary" onClick={onContinue}>
            {activeEncounter.choice.continueText}
        </button>
    </div>
);

function mapStateToProps(
    state: State,
    ownProps: EndEncounterChoiceViewWrapperProps
): Partial<EndEncounterChoiceViewProps> {
    return { activeEncounter: state.encounter.active, ...ownProps };
}

function mapDispatchToProps(
    dispatch: Dispatch,
    ownProps: EndEncounterChoiceViewWrapperProps
): Partial<EndEncounterChoiceViewProps> {
    return {
        onContinue(): void {
            dispatch(encounterEnd());
            dispatch(setScene(Scene.ENCOUNTER_END));
        },
    };
}

export const EndEncounterChoiceView = connect(mapStateToProps, mapDispatchToProps)(render);

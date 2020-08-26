import { h, VNode } from 'preact';
import { ActiveEncounter } from '../../../../common/model/encounter/ActiveEncounter';
import {
    instanceOfEndEncounterChoice,
    instanceofRollChoice,
} from '../../../../common/model/encounter/EncounterChoice';
import { ChoicesStage } from '../../../../common/model/encounter/EncounterStage';
import { EndEncounterChoiceView } from '../choiceTypes/EndEncounterChoiceView';
import { RollChoiceView } from '../choiceTypes/RollChoiceView';

export interface PickedStateViewProps {
    activeEncounter: ActiveEncounter;
    stage: ChoicesStage;
}

export const PickedStateView = ({ activeEncounter, stage }: PickedStateViewProps): VNode => {
    const { choice } = activeEncounter;
    if (instanceOfEndEncounterChoice(choice)) {
        return <EndEncounterChoiceView stage={stage} choice={choice} />;
    } else if (instanceofRollChoice(choice)) {
        return <RollChoiceView stage={stage} choice={choice} />;
    }
    return <div>PickedStateView</div>;
};

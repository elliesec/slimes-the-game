import { h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Scene } from '../../enums';
import { State } from '../../redux/store';
import { EncounterSelection } from './EncounterSelection';
import './EncounterView.scss';

export interface EncounterViewProps {
    currentScene: Scene;
}

const renderView = (currentScene: Scene): VNode => {
    switch (currentScene) {
        case Scene.ENCOUNTER_SELECT:
            return <EncounterSelection />;
        case Scene.ENCOUNTER:
            return <div>Encounter</div>;
        case Scene.ENCOUNTER_END:
            return <div>Encounter End</div>;
        default:
            return null;
    }
};

export const EncounterView = connect(mapStateToProps)(
    ({ currentScene }): VNode => {
        return <div className="EncounterView">{renderView(currentScene)}</div>;
    }
);

function mapStateToProps({ currentScene }: State): Partial<EncounterViewProps> {
    return { currentScene };
}

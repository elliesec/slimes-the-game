import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { encounterReset } from '../../../common/redux/encounter/encounterActions';
import { Scene } from '../../enums';
import { setScene } from '../../redux/actions/game-actions';
import { State } from '../../redux/store';
import { EncounterSelection } from '../encounter/EncounterSelection';
import { EncounterView } from '../encounter/EncounterView';
import './EncounterPanel.scss';

const sceneTitles: Record<Scene, string> = {
    [Scene.ENCOUNTER_SELECT]: 'Encounter Selection',
    [Scene.ENCOUNTER]: 'Encounter Preview',
    [Scene.ENCOUNTER_END]: 'Encounter Complete',
};

export interface EncounterPanelProps {
    currentScene: Scene;
    onReset(): void;
}

const renderView = (currentScene: Scene, onReset: () => void): ReactElement => {
    switch (currentScene) {
        case Scene.ENCOUNTER_SELECT:
            return <EncounterSelection />;
        case Scene.ENCOUNTER:
            return <EncounterView />;
        case Scene.ENCOUNTER_END:
            return (
                <div>
                    <p>Congratulations! You finished the encounter!</p>
                    <button className="primary" onClick={onReset}>
                        Start again?
                    </button>
                </div>
            );
        default:
            return null;
    }
};

export const EncounterPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({ currentScene, onReset }: EncounterPanelProps): ReactElement => {
        return (
            <div className="EncounterPanel">
                <h3 className="header-with-buttons">
                    <span>{sceneTitles[currentScene]}</span>
                    <button onClick={onReset} disabled={currentScene === Scene.ENCOUNTER_SELECT}>
                        Reset
                    </button>
                </h3>
                {renderView(currentScene, onReset)}
            </div>
        );
    }
);

function mapStateToProps({ currentScene }: State): Partial<EncounterPanelProps> {
    return { currentScene };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<EncounterPanelProps> {
    return {
        onReset() {
            dispatch(encounterReset());
            dispatch(setScene(Scene.ENCOUNTER_SELECT));
        },
    };
}

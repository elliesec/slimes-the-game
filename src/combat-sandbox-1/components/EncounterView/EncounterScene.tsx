import { Component, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    EncounterOption,
    instanceOfOptionsEncounterStage,
    OptionsEncounterStage,
} from '../../Encounter';
import { ActiveEncounter, State } from '../../redux/store';
import './EncounterScene.scss';

export interface EncounterSceneProps {
    activeEncounter: ActiveEncounter;
}

const mimic = require('../../assets/mimic.jpg');

export class EncounterSceneComponent extends Component<EncounterSceneProps> {
    public render({ activeEncounter }: EncounterSceneProps): VNode {
        const { encounter, stage } = activeEncounter;
        const encounterStage = encounter.stages.find((s) => s.id === stage);
        return (
            <div className="EncounterScene">
                <div className="encounter-text">
                    <div className="card">
                        <h3>Encounter!</h3>
                        <div className="stage-text">
                            {encounterStage.text.map((t) => (
                                <p>{t}</p>
                            ))}
                        </div>
                        {instanceOfOptionsEncounterStage(encounterStage) &&
                            this.renderOptionsStage(encounterStage)}
                    </div>
                </div>
                <div className="encounter-image">
                    <div className="card">
                        <img src={mimic} alt="Lewd Pictures" />
                    </div>
                </div>
            </div>
        );
    }

    private renderOptionsStage(stage: OptionsEncounterStage): VNode {
        return (
            <div className="options-stage">
                <p>
                    <strong>What do you do?</strong>
                </p>
                <ul className="options">
                    {stage.options.map((option) =>
                        this.renderStageOption(option)
                    )}
                </ul>
            </div>
        );
    }

    private renderStageOption(option: EncounterOption): VNode {
        return <li className="option">{option.text}</li>;
    }
}

export const EncounterScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(EncounterSceneComponent as any);

function mapStateToProps(state: State): Partial<EncounterSceneProps> {
    return {
        activeEncounter: state.encounter.active,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<EncounterSceneProps> {
    return {};
}

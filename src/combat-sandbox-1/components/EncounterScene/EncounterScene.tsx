import { Component, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { EncounterStage } from '../../model/EncounterStage';
import { ActiveEncounter, State } from '../../redux/store';
import './EncounterScene.scss';
import { StageView } from './StageView';

export interface EncounterSceneProps {
    activeEncounter: ActiveEncounter;
}

const mimic = require('../../assets/mimic.jpg');

export class EncounterSceneComponent extends Component<EncounterSceneProps> {
    public render({ activeEncounter }: EncounterSceneProps): VNode {
        const { encounter, stage } = activeEncounter;
        const encounterStage = encounter.stages.find((s: EncounterStage) => s.id === stage);
        return (
            <div className="EncounterScene">
                <div className="encounter-text">
                    <div className="card">
                        <h3>Encounter!</h3>
                        <StageView stage={encounterStage} />
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

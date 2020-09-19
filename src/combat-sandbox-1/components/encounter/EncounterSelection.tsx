import React, { ChangeEvent, Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Callback, noop } from '../../../common/functions';
import { Encounter } from '../../../common/model/encounter/Encounter';
import { encounterStart } from '../../../common/redux/encounter/encounterActions';
import { Scene } from '../../enums';
import { setScene } from '../../redux/actions/game-actions';
import { State } from '../../redux/store';
import './EncounterSelection.scss';

export interface EncounterSelectionProps {
    encounters: Encounter[];
    onSelectEncounter: Callback<Encounter>;
}

export interface EncounterSelectionState {
    selectedEncounter: Encounter;
}

export class EncounterSelectionComponent extends Component<
    EncounterSelectionProps,
    EncounterSelectionState
> {
    public static defaultProps: Partial<EncounterSelectionProps> = {
        encounters: [],
        onSelectEncounter: noop,
    };

    public constructor(props: EncounterSelectionProps) {
        super(props);
        this.state = { selectedEncounter: null };
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSelectEncounter = this.onSelectEncounter.bind(this);
    }

    public render(): ReactElement {
        const { encounters } = this.props;
        return (
            <div className="EncounterSelection">
                <section>
                    <ul className="encounter-stats-list">
                        <li>
                            <span className="key">Encounters Available: </span>
                            <span className="value">{encounters.length}</span>
                        </li>
                    </ul>
                </section>
                <hr />
                <section className="encounter-selection-form">
                    <label htmlFor="encounter-select">
                        <span>Select Encounter: </span>
                        <select
                            id="encounter-select"
                            value={this.state.selectedEncounter?.id}
                            onChange={this.onSelectChange}
                        >
                            <option value="" />
                            {encounters.map((encounter) => (
                                <option key={encounter.id} value={encounter.id}>
                                    {encounter.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button
                        className="primary"
                        disabled={!this.state.selectedEncounter}
                        onClick={this.onSelectEncounter}
                    >
                        Start Encounter
                    </button>
                </section>
            </div>
        );
    }

    private onSelectChange(e: ChangeEvent<HTMLSelectElement>): void {
        const encounterId = e.currentTarget.value;
        const encounter = this.props.encounters.find((e) => e.id === encounterId) ?? null;
        this.setState({ selectedEncounter: encounter });
    }

    private onSelectEncounter(): void {
        const { selectedEncounter } = this.state;
        if (selectedEncounter) {
            this.props.onSelectEncounter(selectedEncounter);
        }
    }
}

export const EncounterSelection = connect(
    mapStateToProps,
    mapDispatchToProps
)(EncounterSelectionComponent as any);

function mapStateToProps(state: State): Partial<EncounterSelectionProps> {
    return {
        encounters: Object.values(state.encounter.byId),
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<EncounterSelectionProps> {
    return {
        onSelectEncounter(encounter: Encounter): void {
            dispatch(encounterStart(encounter));
            dispatch(setScene(Scene.ENCOUNTER));
        },
    };
}

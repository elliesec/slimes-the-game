import { Component, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { noop } from '../common/functions';
import './CombatSandbox1.scss';
import { ConnectedPlayerConfigPanel } from './components/PlayerConfigPanel/PlayerConfigPanel';
import { encounter1 } from './encounter1';
import { Scene } from './enums';
import { Player } from './Player';
import { registerEncounter } from './redux/actions/encounter-actions';
import { setScene } from './redux/actions/game-actions';
import { setPlayer } from './redux/actions/player-actions';
import { defaultPlayer } from './redux/reducers/player-reducer';
import { State } from './redux/store';

const mimic = require('./assets/mimic.jpg');

export interface CombatSandbox1Props {
    player: Player;
    load: () => void;
}

export class CombatSandbox1 extends Component<CombatSandbox1Props> {
    public static defaultProps?: Pick<CombatSandbox1Props, any> = {
        load: noop,
    };

    public constructor(props: CombatSandbox1Props) {
        super(props);
        props.load();
    }

    public render({ player }: CombatSandbox1Props): VNode {
        return (
            <div className="CombatSandbox1">
                <div className="config-panel">
                    <div className="panel-header">
                        <h2>Configuration</h2>
                    </div>
                    <ConnectedPlayerConfigPanel />
                </div>
                <div className="encounter-panel">
                    <div className="panel-header">
                        <h2>Encounter</h2>
                    </div>
                    <div className="encounter-view">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean consectetur in nunc et
                                pharetra. Sed maximus lobortis diam sit amet
                                pharetra. Curabitur condimentum varius
                                porttitor. Fusce sit amet diam libero. Phasellus
                                ut vehicula mi, in sollicitudin nunc. In vel
                                ultricies justo. Quisque dui justo, luctus
                                posuere vehicula in, hendrerit sit amet ligula.
                            </p>
                            <p>
                                Fusce tempor velit eget urna vehicula, sit amet
                                mattis nisl convallis. Vestibulum imperdiet
                                ullamcorper nunc sed vulputate. Morbi ac sapien
                                rhoncus, egestas arcu at, tincidunt lectus. Nunc
                                sit amet urna maximus diam pharetra ultricies
                                sed sit amet nibh. Quisque vulputate metus a
                                nunc aliquet viverra. Proin quis auctor arcu. Ut
                                vulputate ante non venenatis rhoncus. Aliquam
                                sodales sapien eu sagittis luctus.
                            </p>
                        </div>
                        <div className="images">
                            <img src={mimic} alt="Lewd Pictures" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: State): Partial<CombatSandbox1Props> {
    return {
        player: state.player,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<CombatSandbox1Props> {
    return {
        load(): void {
            dispatch(registerEncounter(encounter1));
            dispatch(setPlayer(defaultPlayer()));
            dispatch(setScene(Scene.ENCOUNTER_SELECT));
        },
    };
}

export const ConnectedCombatSandbox1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatSandbox1 as any);

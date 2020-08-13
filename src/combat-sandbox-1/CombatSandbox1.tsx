import { Component, h, VNode } from 'preact';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { noop } from '../common/functions';
import './CombatSandbox1.scss';
import { Player } from './Player';
import { setPlayer } from './redux/actions/player-actions';
import { defaultPlayer } from './redux/reducers/player-reducer';
import { State } from './redux/store';

export interface CombatSandbox1Props {
    player: Player;
    load: () => void;
}

export class CombatSandbox1 extends Component<CombatSandbox1Props, {}> {
    public static defaultProps?: Pick<CombatSandbox1Props, any> = {
        load: noop,
    };

    public constructor(props: CombatSandbox1Props) {
        super(props);
    }

    public render({ player }: CombatSandbox1Props): VNode {
        return (
            <div className="CombatSandbox1">
                <div className="config-panel">
                    <h2>Configuration</h2>
                    <h3>Player</h3>
                    <pre>{JSON.stringify(player, null, 4)}</pre>
                </div>
                <div className="encounter-panel">
                    <h2>Encounter</h2>
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
            dispatch(setPlayer(defaultPlayer()));
        },
    };
}

export const ConnectedCombatSandbox1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatSandbox1 as any);

import classNames from 'classnames';
import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Key } from 'ts-key-enum';
import { Callback, noop } from '../../../common/functions';
import { appSetView } from '../../../common/redux/app/appActions';
import { AppView } from '../../../common/redux/app/appState';
import { State } from '../../redux/store';
import './CheatMenu.scss';

export interface CheatMenuProps {
    onViewSwitch?: Callback<AppView>;
}

export interface CheatMenuState {
    open: boolean;
}

export class CheatMenuClass extends Component<CheatMenuProps, CheatMenuState> {
    public static defaultProps: Partial<CheatMenuProps> = {
        onViewSwitch: noop,
    };

    public constructor(props: CheatMenuProps) {
        super(props);
        this.state = {
            open: false,
        };
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    public componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown);
    }

    public render(): ReactElement {
        const { open } = this.state;
        return (
            <div className={classNames('CheatMenu', { open })}>{open && this.renderModal()}</div>
        );
    }

    public renderModal(): ReactElement {
        return (
            <div className="cheat-modal-screen">
                <div className="cheat-modal">
                    <h3>Super Secret Cheat Menu</h3>
                    <hr />
                    <h4>View Switching</h4>
                    <div className="buttons">
                        <button onClick={() => this.onViewSwitch(AppView.MAIN_MENU)}>
                            Main Menu
                        </button>
                        <button onClick={() => this.onViewSwitch(AppView.DEFAULT)}>
                            Default View
                        </button>
                        <button onClick={() => this.onViewSwitch(AppView.DRESSING_ROOM)}>
                            Dressing Room
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key === 'c') {
            this.setState({ open: !this.state.open });
        }
        if (e.key === Key.Escape && this.state.open) {
            this.setState({ open: false });
        }
    }

    private onViewSwitch(view: AppView): void {
        const { onViewSwitch } = this.props;
        this.setState({ open: false }, () => onViewSwitch(view));
    }
}

function mapDispatchToProps(dispatch: ThunkDispatch<State, void, Action>): Partial<CheatMenuProps> {
    return {
        onViewSwitch(view: AppView): void {
            dispatch(appSetView(view));
        },
    };
}

export const CheatMenu = connect(null, mapDispatchToProps)(CheatMenuClass);

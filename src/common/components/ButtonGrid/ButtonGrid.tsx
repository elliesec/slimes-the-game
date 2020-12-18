import classNames from 'classnames';
import React, { Children, cloneElement, Component, CSSProperties, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Callback } from '../../functions';
import { getConfigHotkeysState } from '../../redux/config/configSelectors';
import { ConfigHotkeysState, Hotkey, WithConfigState } from '../../redux/config/configState';
import { ArrowKey, isArrowKey } from '../../util/keyboardUtils';
import { log } from '../../util/Log';
import './ButtonGrid.scss';

export interface NavigableButtonProps {
    row: number;
    column: number;
    selected?: boolean;
    onFocus?: Callback<NavigableButtonProps>;
    onSelect?: Callback<NavigableButtonProps>;
}

export interface ButtonGridProps<P extends NavigableButtonProps = NavigableButtonProps> {
    children: ReactElement<P> | Array<ReactElement<P>>;
    rows: number;
    columns: number;
    hotkeys: ConfigHotkeysState;
    onSelect?: Callback<NavigableButtonProps>;
    className?: string;
}

export interface ButtonGridState {
    row: number;
    column: number;
}

export class ButtonGridClass extends Component<ButtonGridProps, ButtonGridState> {
    public constructor(props: ButtonGridProps) {
        super(props);

        this.state = {
            row: 0,
            column: 0,
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    public componentDidMount(): void {
        window.addEventListener('keydown', this.onKeyDown);
    }

    public componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    public render<P extends NavigableButtonProps = NavigableButtonProps>(): ReactElement {
        const { children, className } = this.props;
        return (
            <ul className={classNames('ButtonGrid', className)} style={this.getStyle()}>
                {Children.map(children, (child: ReactElement<P>) => {
                    const { row, column } = child.props;
                    const selected = row === this.state.row && column === this.state.column;
                    return (
                        <li style={{ gridRowStart: row + 1, gridColumnStart: column + 1 }}>
                            {cloneElement<P>(child, {
                                ...child.props,
                                selected,
                                onFocus: this.onFocus,
                            })}
                        </li>
                    );
                })}
            </ul>
        );
    }

    protected getStyle(): CSSProperties {
        const { rows, columns } = this.props;
        return {
            gridTemplateRows: new Array(rows).fill('1fr').join(' '),
            gridTemplateColumns: new Array(columns).fill('1fr').join(' '),
        };
    }

    protected onKeyDown(e: KeyboardEvent): void {
        const { children, hotkeys } = this.props;
        if (!hotkeys) {
            return;
        }
        const arrowKey = isArrowKey(e, hotkeys);
        if (arrowKey) {
            this.onArrowKey(arrowKey);
        } else if (hotkeys[Hotkey.SELECT].includes(e.key)) {
            const { row, column } = this.state;
            const selected = Children.toArray(children).find(
                (child: ReactElement<NavigableButtonProps>) =>
                    child.props.row === row && child.props.column === column
            ) as ReactElement<NavigableButtonProps>;
            if (selected) {
                const { onSelect } = selected.props;
                typeof onSelect === 'function' && onSelect(selected.props);
            }
            e.preventDefault();
            return;
        }
    }

    protected onArrowKey(arrowKey: ArrowKey): void {
        let { row, column } = this.state;
        const { rows, columns } = this.props;
        switch (arrowKey) {
            case ArrowKey.LEFT:
                column--;
                break;
            case ArrowKey.RIGHT:
                column++;
                break;
            case ArrowKey.UP:
                row--;
                break;
            case ArrowKey.DOWN:
                row++;
                break;
            default:
                log.warn(`Invalid arrow key: ${arrowKey}`);
                break;
        }
        if (column < 0) {
            column = columns - 1;
        } else if (column >= columns) {
            column = 0;
        }
        if (row < 0) {
            row = rows - 1;
        } else if (row >= rows) {
            row = 0;
        }
        this.setState({ row, column });
    }

    protected onFocus({ row, column }: NavigableButtonProps): void {
        this.setState({ row, column });
    }
}

function mapStateToProps(state: WithConfigState): Pick<ButtonGridProps, 'hotkeys'> {
    return {
        hotkeys: getConfigHotkeysState(state),
    };
}

export const ButtonGrid = connect(mapStateToProps)(ButtonGridClass);

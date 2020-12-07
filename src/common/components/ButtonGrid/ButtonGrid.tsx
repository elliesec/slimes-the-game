import React, { Children, cloneElement, Component, CSSProperties, ReactElement } from 'react';
import { Key } from 'ts-key-enum';
import { Callback } from '../../functions';
import './ButtonGrid.scss';

export interface NavigableButtonProps {
    row: number;
    column: number;
    selected?: boolean;
    onFocus?: Callback<NavigableButtonProps>;
}

export interface ButtonGridProps<P extends NavigableButtonProps = NavigableButtonProps> {
    children: ReactElement<P> | Array<ReactElement<P>>;
    rows: number;
    columns: number;
}

export interface ButtonGridState {
    row: number;
    column: number;
}

export class ButtonGrid extends Component<ButtonGridProps, ButtonGridState> {
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
        const { children } = this.props;
        return (
            <ul className="ButtonGrid" style={this.getStyle()}>
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
        let { row, column } = this.state;
        const { rows, columns } = this.props;
        switch (e.key) {
            case Key.ArrowLeft:
                column--;
                break;
            case Key.ArrowRight:
                column++;
                break;
            case Key.ArrowUp:
                row--;
                break;
            case Key.ArrowDown:
                row++;
                break;
            default:
                return;
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

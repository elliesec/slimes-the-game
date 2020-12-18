import classNames from 'classnames';
import React, { Component, createRef, ReactElement } from 'react';
import { NavigableButtonProps } from '../../../../common/components/ButtonGrid/ButtonGrid';
import { noop } from '../../../../common/functions';
import './MainMenuButton.scss';

export interface MainMenuButtonProps extends NavigableButtonProps {}

export class MainMenuButton extends Component<MainMenuButtonProps> {
    public static readonly defaultProps: Partial<MainMenuButtonProps> = {
        onFocus: noop,
        onSelect: noop,
    };

    private readonly buttonRef = createRef<HTMLButtonElement>();

    public constructor(props: MainMenuButtonProps) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    public componentDidUpdate(prevProps: Readonly<MainMenuButtonProps>) {
        if (this.props.selected && !prevProps.selected) {
            this.buttonRef.current.focus();
        }
    }

    public render(): ReactElement {
        const { selected } = this.props;
        return (
            <button
                ref={this.buttonRef}
                className={classNames('MainMenuButton', { selected })}
                onFocus={this.onFocus}
                onClick={this.onSelect}
            >
                {this.props.children}
            </button>
        );
    }

    private onFocus(): void {
        this.props.onFocus(this.props);
    }

    private onSelect(): void {
        this.props.onSelect(this.props);
    }
}

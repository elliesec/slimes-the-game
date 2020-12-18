import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import { ButtonGrid } from '../../../../common/components/ButtonGrid/ButtonGrid';
import { noop } from '../../../../common/functions';
import { MainMenuButton } from './MainMenuButton';

export interface MainMenuButtonsProps {
    onNewGame(): void;
    onLoadGame(): void;
    onSettings(): void;
}

export class MainMenuButtonsClass extends Component<MainMenuButtonsProps> {
    public static defaultProps: MainMenuButtonsProps = {
        onNewGame: noop,
        onLoadGame: noop,
        onSettings: noop,
    };

    public constructor(props: MainMenuButtonsProps) {
        super(props);
        this.onNewGame = this.onNewGame.bind(this);
        this.onLoadGame = this.onLoadGame.bind(this);
        this.onSettings = this.onSettings.bind(this);
    }

    public render(): ReactElement {
        return (
            <ButtonGrid rows={3} columns={1}>
                <MainMenuButton row={0} column={0} onSelect={this.onNewGame}>
                    New Game
                </MainMenuButton>
                <MainMenuButton row={1} column={0} onSelect={this.onLoadGame}>
                    Load Game
                </MainMenuButton>
                <MainMenuButton row={2} column={0} onSelect={this.onSettings}>
                    Settings
                </MainMenuButton>
            </ButtonGrid>
        );
    }

    private onNewGame(): void {
        this.props.onNewGame();
    }

    private onLoadGame(): void {
        this.props.onLoadGame();
    }

    private onSettings(): void {
        this.props.onSettings();
    }
}

function mapDispatchToProps(): Pick<
    MainMenuButtonsProps,
    'onNewGame' | 'onLoadGame' | 'onSettings'
> {
    return {
        onNewGame(): void {
            console.log('dispatch new game');
        },
        onLoadGame(): void {
            console.log('dispatch load game');
        },
        onSettings(): void {
            console.log('dispatch settings');
        },
    };
}

export const MainMenuButtons = connect(null, mapDispatchToProps)(MainMenuButtonsClass);

import React, { ChangeEvent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Callback } from '../../../common/functions';
import { Player } from '../../Player';
import { setDescription, setPlayer, setStat } from '../../redux/actions/player-actions';
import { defaultPlayer } from '../../redux/reducers/player-reducer';
import { State } from '../../redux/store';
import './PlayerConfigPanel.scss';
import { PlayerConfigPanelInput } from './PlayerConfigPanelInput';

export interface PlayerConfigPanelProps {
    player: Player;
    onPlayerReset: () => void;
    onNameChange: Callback<ChangeEvent<HTMLInputElement>>;
    onStrengthChange: Callback<ChangeEvent<HTMLInputElement>>;
    onDexterityChange: Callback<ChangeEvent<HTMLInputElement>>;
    onConstitutionChange: Callback<ChangeEvent<HTMLInputElement>>;
    onWisdomChange: Callback<ChangeEvent<HTMLInputElement>>;
    onIntelligenceChange: Callback<ChangeEvent<HTMLInputElement>>;
    onCharismaChange: Callback<ChangeEvent<HTMLInputElement>>;
    onMaxWillpowerChange: Callback<ChangeEvent<HTMLInputElement>>;
    onWillpowerChange: Callback<ChangeEvent<HTMLInputElement>>;
}

const render = ({
    player,
    onPlayerReset,
    onNameChange,
    onStrengthChange,
    onDexterityChange,
    onConstitutionChange,
    onWisdomChange,
    onIntelligenceChange,
    onCharismaChange,
    onMaxWillpowerChange,
    onWillpowerChange,
}: PlayerConfigPanelProps): ReactElement => (
    <div className="PlayerConfigPanel">
        <h3 className="header-with-buttons">
            <span>Player</span>
            <button onClick={onPlayerReset}>Reset</button>
        </h3>
        <PlayerConfigPanelInput
            id="name-input"
            label="Name"
            type="text"
            value={player.name}
            onChange={onNameChange}
        />
        <h4>Attributes</h4>
        <div className="attribute-config">
            <PlayerConfigPanelInput
                id="strength-input"
                label="Strength"
                type="number"
                value={player.strength}
                min={1}
                onChange={onStrengthChange}
            />
            <PlayerConfigPanelInput
                id="dexterity-input"
                label="Dexterity"
                type="number"
                value={player.dexterity}
                min={1}
                onChange={onDexterityChange}
            />
            <PlayerConfigPanelInput
                id="constitution-input"
                label="Constitution"
                type="number"
                value={player.constitution}
                min={1}
                onChange={onConstitutionChange}
            />
            <PlayerConfigPanelInput
                id="wisdom-input"
                label="Wisdom"
                type="number"
                value={player.wisdom}
                min={1}
                onChange={onWisdomChange}
            />
            <PlayerConfigPanelInput
                id="intelligence-input"
                label="Intelligence"
                type="number"
                value={player.intelligence}
                min={1}
                onChange={onIntelligenceChange}
            />
            <PlayerConfigPanelInput
                id="charisma-input"
                label="Charisma"
                type="number"
                value={player.charisma}
                min={1}
                onChange={onCharismaChange}
            />
        </div>
        <hr />
        <h4>Resources</h4>
        <PlayerConfigPanelInput
            id="max-willpower-input"
            label="Max Willpower"
            type="number"
            value={player.maxWillpower}
            min={1}
            onChange={onMaxWillpowerChange}
        />
        <PlayerConfigPanelInput
            id="willpower-input"
            label="Willpower"
            type="number"
            value={player.willpower}
            min={0}
            max={player.maxWillpower}
            onChange={onWillpowerChange}
        />
    </div>
);

function mapStateToProps(state: State): Partial<PlayerConfigPanelProps> {
    return {
        player: state.player,
    };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<PlayerConfigPanelProps> {
    return {
        onPlayerReset(): void {
            dispatch(setPlayer(defaultPlayer()));
        },
        onNameChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = e.currentTarget.value;
            dispatch(setDescription('name', value));
        },
        onStrengthChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('strength', value));
        },
        onDexterityChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('dexterity', value));
        },
        onConstitutionChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('constitution', value));
        },
        onWisdomChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('wisdom', value));
        },
        onIntelligenceChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('intelligence', value));
        },
        onCharismaChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('charisma', value));
        },
        onMaxWillpowerChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('maxWillpower', value));
        },
        onWillpowerChange(e: ChangeEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('willpower', value));
        },
    };
}

export const PlayerConfigPanel = connect(mapStateToProps, mapDispatchToProps)(render);

import { h, VNode } from 'preact';
import { JSXInternal } from 'preact/src/jsx';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Callback } from '../../../common/functions';
import { Player } from '../../Player';
import { setDescription, setStat } from '../../redux/actions/player-actions';
import { State } from '../../redux/store';
import './PlayerConfigPanel.scss';
import { PlayerConfigPanelInput } from './PlayerConfigPanelInput';
import TargetedEvent = JSXInternal.TargetedEvent;

export interface PlayerConfigPanelProps {
    player: Player;
    onNameChange: Callback<TargetedEvent<HTMLInputElement>>;
    onStrengthChange: Callback<TargetedEvent<HTMLInputElement>>;
    onDexterityChange: Callback<TargetedEvent<HTMLInputElement>>;
    onConstitutionChange: Callback<TargetedEvent<HTMLInputElement>>;
    onWisdomChange: Callback<TargetedEvent<HTMLInputElement>>;
    onIntelligenceChange: Callback<TargetedEvent<HTMLInputElement>>;
    onCharismaChange: Callback<TargetedEvent<HTMLInputElement>>;
    onMaxWillpowerChange: Callback<TargetedEvent<HTMLInputElement>>;
    onWillpowerChange: Callback<TargetedEvent<HTMLInputElement>>;
}

export const PlayerConfigPanel = ({
    player,
    onNameChange,
    onStrengthChange,
    onDexterityChange,
    onConstitutionChange,
    onWisdomChange,
    onIntelligenceChange,
    onCharismaChange,
    onMaxWillpowerChange,
    onWillpowerChange,
}: PlayerConfigPanelProps): VNode => (
    <div className="PlayerConfigPanel">
        <h3>Player</h3>
        <PlayerConfigPanelInput
            id="name-input"
            label="Name"
            type="text"
            value={player.name}
            onChange={onNameChange}
        />
        <h4>Attributes</h4>
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
            min={1}
            onChange={onWillpowerChange}
        />
    </div>
);

function mapStateToProps(state: State): Partial<PlayerConfigPanelProps> {
    return {
        player: state.player,
    };
}

function mapDispatchToProps(
    dispatch: Dispatch
): Partial<PlayerConfigPanelProps> {
    return {
        onNameChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = e.currentTarget.value;
            dispatch(setDescription('name', value));
        },
        onStrengthChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('strength', value));
        },
        onDexterityChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('dexterity', value));
        },
        onConstitutionChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('constitution', value));
        },
        onWisdomChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('wisdom', value));
        },
        onIntelligenceChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('intelligence', value));
        },
        onCharismaChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('charisma', value));
        },
        onMaxWillpowerChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('maxWillpower', value));
        },
        onWillpowerChange(e: TargetedEvent<HTMLInputElement>): void {
            const value = Number(e.currentTarget.value);
            dispatch(setStat('willpower', value));
        },
    };
}

export const ConnectedPlayerConfigPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerConfigPanel);

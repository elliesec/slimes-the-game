import { Player, PlayerStats, Stat } from '../Player';
import { OptionRequirements } from './EncounterOption';

const statAbbreviations: Record<Stat, string> = {
    [Stat.STR]: 'STR',
    [Stat.DEX]: 'DEX',
    [Stat.CON]: 'CON',
    [Stat.WIS]: 'WIS',
    [Stat.INT]: 'INT',
    [Stat.CHA]: 'CHA',
};

const statKeys: Record<Stat, keyof PlayerStats> = {
    [Stat.STR]: 'strength',
    [Stat.DEX]: 'dexterity',
    [Stat.CON]: 'constitution',
    [Stat.WIS]: 'wisdom',
    [Stat.INT]: 'intelligence',
    [Stat.CHA]: 'charisma',
};

export function getRequiredStats(option: OptionRequirements): Stat[] {
    return Object.keys(option) as Stat[];
}

export function getStatAbbreviation(stat: Stat): string {
    return statAbbreviations[stat];
}

export function checkStatRequirement(
    player: Player,
    stat: Stat,
    req: number
): boolean {
    const key = statKeys[stat];
    return player[key] >= req;
}

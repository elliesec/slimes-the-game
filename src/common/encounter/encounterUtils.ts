import { Player, Stat } from '../../combat-sandbox-1/Player';
import { EncounterChoice } from '../model/encounter/EncounterChoice';

const statNames: Record<Stat, string> = {
    [Stat.STR]: 'Strength',
    [Stat.DEX]: 'Dexterity',
    [Stat.CON]: 'Constitution',
    [Stat.WIS]: 'Wisdom',
    [Stat.INT]: 'Intelligence',
    [Stat.CHA]: 'Charisma',
};
const statAbbreviations: Record<Stat, string> = {
    [Stat.STR]: 'STR',
    [Stat.DEX]: 'DEX',
    [Stat.CON]: 'CON',
    [Stat.WIS]: 'WIS',
    [Stat.INT]: 'INT',
    [Stat.CHA]: 'CHA',
};

export function getRequiredStats({ requirements }: EncounterChoice): Stat[] {
    return Object.keys(requirements) as Stat[];
}

export function checkChoiceRequirements(player: Player, choice: EncounterChoice): boolean {
    if (!choice.requirements) return true;
    const stats = getRequiredStats(choice);
    return stats.every((stat) => player[stat] >= choice.requirements[stat]);
}

export function getStatName(stat: Stat): string {
    return statNames[stat];
}

export function getStatAbbreviation(stat: Stat): string {
    return statAbbreviations[stat];
}

export interface PlayerStats {
    maxWillpower: number;
    willpower: number;
    strength: number;
    dexterity: number;
    constitution: number;
    wisdom: number;
    intelligence: number;
    charisma: number;
}

export interface PlayerDescription {
    name: string;
}

export interface Player extends PlayerDescription, PlayerStats {}

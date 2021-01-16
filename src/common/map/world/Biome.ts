export enum BiomeType {
    GRASSLAND = 'GRASSLAND',
    WOODLAND = 'WOODLAND',
}

export interface Biome {
    type: BiomeType;
}

export const Biomes: Record<BiomeType, Biome> = {
    [BiomeType.GRASSLAND]: {
        type: BiomeType.GRASSLAND,
    },
    [BiomeType.WOODLAND]: {
        type: BiomeType.WOODLAND,
    },
};

export const BiomeValues = Object.values(Biomes);

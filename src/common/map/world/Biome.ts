export enum BiomeType {
    GRASSLAND = 'grassland',
    WOODLAND = 'woodland',
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

export const BiomeTypeValues = Object.values(BiomeType);

export function instanceOfBiomeType(val: any): val is BiomeType {
    return BiomeTypeValues.includes(val as any);
}

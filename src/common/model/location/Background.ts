export enum Background {
    FOREST_1 = 'forest-1',
}

export const BackgroundValues: Background[] = Object.values(Background);

export function instanceOfBackground(val: any): val is Background {
    return BackgroundValues.includes(val as any);
}

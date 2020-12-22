export enum Background {
    FOREST_1 = 'forest-1',
}

export const BackgroundValues: Background[] = Object.values(Background);

export function instanceOfBackground(val: string): val is Background {
    return !!BackgroundValues.find((bg) => val === bg);
}

export function roll(dieCount: number, dieFaces: number): number {
    let sum = 0;
    for (let i = 0; i < dieCount; i++) {
        sum += randomInt(1, dieFaces);
    }
    return sum;
}

export function randomInt(min = 1, max = 6): number {
    return min + Math.floor(Math.random() * (1 + max - min));
}

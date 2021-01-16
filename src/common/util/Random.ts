import { alea, prng } from 'seedrandom';
import { Hash } from './Hash';

export class Random {
    private static readonly hash = new Hash(6101);

    private currentSeed: string;
    private rng: prng;

    public constructor(seed = Math.random().toString(16)) {
        this.seed(seed);
    }

    public seed(seed: string): void {
        this.currentSeed = seed;
        const hashedSeed = Random.hash.hex(seed);
        this.rng = alea(hashedSeed);
    }

    public getSeed(): string {
        return this.currentSeed;
    }

    public number(): number {
        return this.rng();
    }

    public numberInRange(min: number, max: number): number {
        return min + (max - min) * this.number();
    }

    public int(): number {
        return this.intInRange(0, Number.MAX_SAFE_INTEGER);
    }

    public intInRange(min: number, max: number): number {
        return Math.floor(min + (max + 1 - min) * this.number());
    }

    public spawnSeed(): string {
        return this.int().toString(16);
    }

    public arrayValue<T>(arr: T[]): T {
        return arr[this.intInRange(0, arr.length - 1)];
    }
}

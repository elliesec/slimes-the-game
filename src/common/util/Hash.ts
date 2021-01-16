import murmur from 'murmurhash-js';

export class Hash {
    public constructor(public readonly seed: number) {}

    public hash(value: string): number {
        return murmur(value, this.seed);
    }

    public hex(value: string): string {
        return this.hash(value).toString(16);
    }
}

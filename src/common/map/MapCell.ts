export interface MapCellConfig {
    readonly x: number;
    readonly y: number;
}

export abstract class MapCell<Config extends MapCellConfig> {
    public get x(): number {
        return this.config.x;
    }

    public get y(): number {
        return this.config.y;
    }

    public constructor(protected readonly config: Config) {}
}

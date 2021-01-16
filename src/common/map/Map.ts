import { DoubleCallback } from '../functions';
import { log } from '../util/Log';
import { MapCell } from './MapCell';

export interface MapConfig {
    readonly width: number;
    readonly height: number;
    readonly seed: string;
}

export abstract class Map<Config extends MapConfig, C extends MapCell<any>> {
    protected readonly cells: C[];
    protected readonly config: Config;

    public get width(): number {
        return this.config.width;
    }

    public get height(): number {
        return this.config.height;
    }

    public get seed(): string {
        return this.config.seed;
    }

    public constructor(config: Config) {
        this.cells = [];
        this.config = config;
        for (let x = 0; x < config.width; x++) {
            for (let y = 0; y < config.height; y++) {
                this.cells.push(this.createEmptyCell(x, y, this.config));
            }
        }
    }

    public forEach(callback: DoubleCallback<C, number>): void {
        this.cells.forEach((cell, i) => callback(cell, i));
    }

    public getCell(x: number, y: number): C {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            log.warn(`Coordinate (${x}, ${y}) is out of grid bounds`);
            return null;
        }
        return this.cells[x * this.width + y];
    }

    protected abstract createEmptyCell(x: number, y: number, config?: Config): C;
}

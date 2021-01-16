import { Random } from '../../util/Random';
import { MapGenerator } from '../MapGenerator';
import { WorldMapGenerationJob } from './job/WorldMapGenerationJob';
import { WorldMap } from './WorldMap';
import { WorldMapCell } from './WorldMapCell';

export class WorldMapGeneratorConfig {
    width: number;
    height: number;
    seed: string;
}

export class WorldMapGenerator extends MapGenerator<
    WorldMap,
    WorldMapCell,
    WorldMapGeneratorConfig
> {
    private readonly random: Random;

    public constructor(config: WorldMapGeneratorConfig) {
        super(config);
        this.random = new Random();
    }

    public generate(): WorldMapGenerationJob {
        this.random.seed(this.map.seed);
        return new WorldMapGenerationJob({ map: this.map, seed: this.random.spawnSeed() });
    }

    protected createMap({ width, height, seed }: WorldMapGeneratorConfig): WorldMap {
        return new WorldMap({ width, height, seed });
    }
}

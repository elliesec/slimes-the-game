import { MapRegistry } from '../../../slimes-the-game/maps/MapRegistry';
import { Task } from '../../tasks/Task';
import { Random } from '../../util/Random';
import { MapGenerator } from '../MapGenerator';
import { WorldMapGenerationTask } from './tasks/WorldMapGenerationTask';
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

    public generate(): Task {
        this.random.seed(this.map.seed);
        return new WorldMapGenerationTask({ map: this.map, seed: this.random.spawnSeed() });
    }

    protected createMap({ width, height, seed }: WorldMapGeneratorConfig): WorldMap {
        const worldMap = new WorldMap({ width, height, seed });
        MapRegistry.setWorldMap(worldMap);
        return worldMap;
    }
}

import { CompositeSeriesTask } from '../../../tasks/CompositeSeriesTask';
import { Random } from '../../../util/Random';
import { WorldMap } from '../WorldMap';
import { BiomeGenerationTask } from './BiomeGenerationTask';

export interface WorldMapGenerationConfig {
    map: WorldMap;
    seed: string;
}

export class WorldMapGenerationTask extends CompositeSeriesTask {
    public constructor({ seed, map }: WorldMapGenerationConfig) {
        super('World Map Generation');
        const random = new Random(seed);
        this.add(new BiomeGenerationTask(random.spawnSeed(), map));
    }
}

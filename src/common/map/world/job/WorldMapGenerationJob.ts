import { BaseJob } from '../../../model/job/BaseJob';
import { BaseTask } from '../../../model/job/BaseTask';
import { Random } from '../../../util/Random';
import { WorldMap } from '../WorldMap';
import { BiomeGenerationTask } from './BiomeGenerationTask';

export interface WorldMapGenerationConfig {
    map: WorldMap;
    seed: string;
}

export class WorldMapGenerationJob extends BaseJob<WorldMapGenerationConfig, WorldMap> {
    protected get map(): WorldMap {
        return this.config.map;
    }

    protected createTasks({ map, seed }: WorldMapGenerationConfig): BaseTask[] {
        const random = new Random(seed);
        const biomeGenerationTask = new BiomeGenerationTask(random.spawnSeed(), map);
        return [biomeGenerationTask];
    }

    protected getResult(): WorldMap {
        return this.map;
    }
}

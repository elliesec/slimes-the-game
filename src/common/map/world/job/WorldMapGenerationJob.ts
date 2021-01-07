import { BaseJob } from '../../../model/job/BaseJob';
import { BaseTask } from '../../../model/job/BaseTask';
import { log } from '../../../util/Log';
import { WorldMap } from '../WorldMap';

export interface WorldMapGenerationConfig {
    map: WorldMap;
}

export class WorldMapGenerationJob extends BaseJob<WorldMapGenerationConfig> {
    protected createTasks({ map }: WorldMapGenerationConfig): BaseTask[] {
        map.forEach((cell) => {
            log.info(`${cell.x}, ${cell.y}`);
        });
        return [];
    }
}

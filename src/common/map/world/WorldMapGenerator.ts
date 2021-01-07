import { BaseJob } from '../../model/job/BaseJob';
import { MapGenerator } from '../MapGenerator';
import { WorldMapGenerationJob } from './job/WorldMapGenerationJob';
import { WorldMap } from './WorldMap';
import { WorldMapCell } from './WorldMapCell';

export class WorldMapGeneratorConfig {
    width: number;
    height: number;
}

export class WorldMapGenerator extends MapGenerator<
    WorldMap,
    WorldMapCell,
    WorldMapGeneratorConfig
> {
    public generate(config: WorldMapGeneratorConfig): BaseJob {
        return new WorldMapGenerationJob({ map: this.map });
    }

    protected createMap(config: WorldMapGeneratorConfig): WorldMap {
        return new WorldMap({
            width: config.width,
            height: config.height,
        });
    }
}

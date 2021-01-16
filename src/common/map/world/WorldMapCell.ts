import { MapCell, MapCellConfig } from '../MapCell';
import { Biome } from './Biome';

export interface WorldMapCellConfig extends MapCellConfig {}

export class WorldMapCell extends MapCell<WorldMapCellConfig> {
    public biome: Biome;

    public constructor(config: WorldMapCellConfig) {
        super(config);
    }
}

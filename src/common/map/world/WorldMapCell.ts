import { MapCell, MapCellConfig } from '../MapCell';

export interface WorldMapCellConfig extends MapCellConfig {}

export class WorldMapCell extends MapCell<WorldMapCellConfig> {
    public constructor(config: WorldMapCellConfig) {
        super(config);
    }
}

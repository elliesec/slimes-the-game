import { Map, MapConfig } from '../Map';
import { WorldMapCell } from './WorldMapCell';

export interface WorldMapConfig extends MapConfig {}

export class WorldMap extends Map<WorldMapConfig, WorldMapCell> {
    protected createEmptyCell(x: number, y: number, config?: WorldMapConfig): WorldMapCell {
        return new WorldMapCell({ x, y });
    }
}

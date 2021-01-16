import { BaseJob } from '../model/job/BaseJob';
import { Map } from './Map';
import { MapCell } from './MapCell';

export abstract class MapGenerator<
    MapType extends Map<any, CellType>,
    CellType extends MapCell<any>,
    Config = {}
> {
    protected readonly map: MapType;

    public constructor(protected readonly config: Config) {
        this.map = this.createMap(config);
    }

    public getMap(): MapType {
        return this.map;
    }

    public abstract generate(): BaseJob<any, any>;

    protected abstract createMap(config?: Config): MapType;
}

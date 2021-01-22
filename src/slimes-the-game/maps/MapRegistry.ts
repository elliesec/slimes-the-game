import { WorldMap } from '../../common/map/world/WorldMap';

export class MapRegistry {
    private static worldMap: WorldMap;

    public static setWorldMap(map: WorldMap): void {
        this.worldMap = map;
    }

    public static getWorldMap(): WorldMap {
        return this.worldMap;
    }
}

import { Sprite } from 'pixi.js';
import { Map } from '../../common/map/Map';
import { MapCell } from '../../common/map/MapCell';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { MapAssets } from '../assets/map/mapAssets';

const TILE_SIZE = 32;

export interface MapContainerProps {
    map: Map<any, MapCell<any>>;
}

export class MapContainer extends LayoutContainer<MapContainerProps> {
    public constructor(props: MapContainerProps) {
        super(props);
    }

    public layout(): void {
        const { map } = this.props;
        const mapTiles = MapAssets.tiles;
        map.forEach(({ x, y, biome }) => {
            const sprite = Sprite.from(mapTiles[biome.type]);
            sprite.x = x * TILE_SIZE;
            sprite.y = y * TILE_SIZE;
            this.addChild(sprite);
        });
    }
}

import { Container, Graphics, Sprite } from 'pixi.js';
import { Map } from '../../common/map/Map';
import { MapCell } from '../../common/map/MapCell';
import { DomTrackingContainerProps } from '../../common/pixi/containers/DomTrackingContainer';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { MapAssets } from '../assets/map/mapAssets';

const TILE_SIZE = 32;

export interface MapContainerProps extends DomTrackingContainerProps {
    map: Map<any, MapCell<any>>;
}

export class MapContainer extends LayoutContainer<MapContainerProps> {
    private outerContainer: Container;

    public constructor(props: MapContainerProps) {
        super(props);
    }

    public layout(): void {
        const { map } = this.props;
        const mapTiles = MapAssets.tiles;
        this.outerContainer = new Container();

        const background = new Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, this.props.width, this.props.height);
        console.log(this.width, this.height);
        this.addChild(background);

        map.forEach(({ x, y, biome }) => {
            const sprite = Sprite.from(mapTiles[biome.type]);
            sprite.x = x * TILE_SIZE;
            sprite.y = y * TILE_SIZE;
            this.outerContainer.addChild(sprite);
        });

        this.outerContainer.x = 32;
        this.outerContainer.y = 32;
        this.addChild(this.outerContainer);
    }
}

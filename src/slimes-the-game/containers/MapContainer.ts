import { Container, Graphics, Sprite } from 'pixi.js';
import { Unsubscribe } from 'redux';
import { Map } from '../../common/map/Map';
import { MapCell } from '../../common/map/MapCell';
import { DomTrackingContainerProps } from '../../common/pixi/containers/DomTrackingContainer';
import { LayoutContainer } from '../../common/pixi/containers/LayoutContainer';
import { ContainerDestroyOptions } from '../../common/types';
import { MapAssets } from '../assets/map/mapAssets';
import { TILE_SIZE } from '../config/config';
import { store } from '../redux/store';

export interface MapContainerProps extends DomTrackingContainerProps {
    map: Map<any, MapCell<any>>;
    position: [number, number];
}

export class MapContainer extends LayoutContainer<MapContainerProps> {
    private readonly innerContainer = new Container();
    private readonly locationIndicator = new Graphics();
    private readonly unsubscribeFromStore: Unsubscribe;

    public constructor(props: MapContainerProps) {
        super(props);
        this.createLocationIndicator();
        this.setPropsFromState = this.setPropsFromState.bind(this);
        this.unsubscribeFromStore = store.subscribe(this.setPropsFromState);
    }

    public layout(): void {
        const { map, width, height } = this.props;

        const background = new Graphics().beginFill(0x000000).drawRect(0, 0, width, height);
        this.addChild(background);

        map.forEach(({ x, y, biome }) => {
            const sprite = Sprite.from(MapAssets.tiles[biome.type]);
            sprite.x = x * TILE_SIZE;
            sprite.y = y * TILE_SIZE;
            this.innerContainer.addChild(sprite);
        });

        this.setPosition();
        this.addChild(this.innerContainer);

        this.locationIndicator.x = 0.5 * width;
        this.locationIndicator.y = 0.5 * height;
        this.addChild(this.locationIndicator);
    }

    public clear() {
        this.innerContainer.removeChildren();
        super.clear();
    }

    public destroy(options?: ContainerDestroyOptions) {
        this.unsubscribeFromStore();
        super.destroy(options);
    }

    protected tick(delta: number) {
        super.tick(delta);
        this.setPosition();
    }

    private createLocationIndicator(): void {
        const quarter = TILE_SIZE / 4;
        this.locationIndicator
            .beginFill(0x000000, 0)
            .lineStyle(4, 0xd84315)
            .moveTo(0, quarter)
            .lineTo(0, 0)
            .lineTo(quarter, 0)
            .moveTo(3 * quarter, 0)
            .lineTo(TILE_SIZE, 0)
            .lineTo(TILE_SIZE, quarter)
            .moveTo(TILE_SIZE, 3 * quarter)
            .lineTo(TILE_SIZE, TILE_SIZE)
            .lineTo(3 * quarter, TILE_SIZE)
            .moveTo(quarter, TILE_SIZE)
            .lineTo(0, TILE_SIZE)
            .lineTo(0, 3 * quarter)
            .pivot.set(0.5 * TILE_SIZE, 0.5 * TILE_SIZE);
    }

    private setPropsFromState(): void {
        const state = store.getState();
        const position = state.location.position;
        if (position !== this.props.position) {
            this.setProps({ position });
        }
    }

    private setPosition() {
        const { width, height, position } = this.props;
        const [x, y] = position;
        this.innerContainer.x = 0.5 * (width - TILE_SIZE) - x * TILE_SIZE;
        this.innerContainer.y = 0.5 * (height - TILE_SIZE) - y * TILE_SIZE;
    }
}

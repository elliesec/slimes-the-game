import {
    DomTrackingContainer,
    DomTrackingContainerProps,
} from '../../../../common/pixi/containers/DomTrackingContainer';
import { MapContainer } from '../../../containers/MapContainer';
import { MapRegistry } from '../../../maps/MapRegistry';

export interface MapWindowContainerProps extends DomTrackingContainerProps {
    position: [number, number];
}

export class MapWindowContainer extends DomTrackingContainer<MapWindowContainerProps> {
    public layout(): void {
        super.layout();
        this.addMapContainer();
    }

    private addMapContainer(): void {
        const map = MapRegistry.getWorldMap();
        const mapContainer = new MapContainer({ ...this.props, map });
        this.addChild(mapContainer);
    }
}

import { BiomeType, instanceOfBiomeType } from '../../../common/map/world/Biome';
import { log } from '../../../common/util/Log';

const FILE_NAME_REGEX = /\.\/(.+)\.(jpe?g|png)$/;

export interface MapAssets {
    tiles: Record<BiomeType, string>;
}

export const MapAssets: MapAssets = {
    tiles: loadMapTiles(),
};

function loadMapTiles(): Record<BiomeType, string> {
    log.debug('Loading map tiles: Starting...');
    const context = require.context('./tiles', false, /\.(jpe?g|png)$/);
    const mapTiles = context.keys().reduce((record, key) => {
        const filename = key.match(FILE_NAME_REGEX)[1];
        if (instanceOfBiomeType(filename)) {
            record[filename] = context(key);
        }
        return record;
    }, {} as Record<BiomeType, string>);
    log.debug('Loading map tiles: Done.');
    return mapTiles;
}

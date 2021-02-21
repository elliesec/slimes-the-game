import { Background } from '../../model/location/Background';

export interface LocationState {
    background: Background;
    position: [number, number];
}

export interface WithLocationState {
    location: LocationState;
}

export function defaultLocationState(): LocationState {
    return {
        background: Background.FOREST_1,
        position: [0, 0],
    };
}

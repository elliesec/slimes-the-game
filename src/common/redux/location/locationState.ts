import { Background } from '../../model/location/Background';

export interface LocationState {
    background: Background;
}

export interface WithLocationState {
    location: LocationState;
}

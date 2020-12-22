import { Background } from '../../model/location/Background';
import { WithLocationState } from './locationState';

export function getLocationBackground(state: WithLocationState): Background {
    return state.location.background;
}

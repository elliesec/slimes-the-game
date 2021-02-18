import { Background } from '../../model/location/Background';
import { PayloadAction } from '../reduxUtils';

export enum LocationAction {
    SET_BACKGROUND = 'location/set-background',
}

export function setBackground(background: Background): PayloadAction<Background> {
    return { type: LocationAction.SET_BACKGROUND, payload: background };
}

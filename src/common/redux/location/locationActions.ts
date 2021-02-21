import { Background } from '../../model/location/Background';
import { PayloadAction } from '../reduxUtils';

export enum LocationAction {
    SET_BACKGROUND = 'location/set-background',
    SET_POSITION   = 'location/set-position',
}

export function setBackground(background: Background): PayloadAction<Background> {
    return { type: LocationAction.SET_BACKGROUND, payload: background };
}

export function setPosition(x: number, y: number): PayloadAction<[number, number]> {
    return { type: LocationAction.SET_POSITION, payload: [x, y] };
}

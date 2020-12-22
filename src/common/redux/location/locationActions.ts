import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { Background } from '../../model/location/Background';

export enum LocationAction {
    SET_BACKGROUND = 'location/set-background',
}

export function setBackground(background: Background): PayloadAction<Background> {
    return { type: LocationAction.SET_BACKGROUND, payload: background };
}

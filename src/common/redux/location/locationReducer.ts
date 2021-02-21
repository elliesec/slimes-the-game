import produce from 'immer';
import { Background, instanceOfBackground } from '../../model/location/Background';
import { PayloadAction, reducerFromMap } from '../reduxUtils';
import { LocationAction } from './locationActions';
import { defaultLocationState, LocationState } from './locationState';

const setBackgroundReducer = produce(
    (draft: LocationState, { payload }: PayloadAction<Background>) => {
        if (payload && instanceOfBackground(payload)) {
            draft.background = payload;
        }
    },
);

const setPositionReducer = produce(
    (draft: LocationState, { payload: [x, y] }: PayloadAction<[number, number]>) => {
        if (typeof x === 'number' && typeof y === 'number') {
            draft.position = [x, y];
        }
    },
);

export const locationReducer = reducerFromMap<LocationState>(
    {
        [LocationAction.SET_BACKGROUND]: setBackgroundReducer,
        [LocationAction.SET_POSITION]  : setPositionReducer,
    },
    defaultLocationState(),
);

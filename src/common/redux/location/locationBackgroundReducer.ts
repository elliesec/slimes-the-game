import produce from 'immer';
import { Action, Reducer } from 'redux';
import { Background, instanceOfBackground } from '../../model/location/Background';
import { PayloadAction } from '../reduxUtils';
import { LocationAction } from './locationActions';

const setBackgroundReducer = produce(
    (state: Background, { payload }: PayloadAction<Background>) => {
        if (payload && instanceOfBackground(payload)) {
            return payload;
        }
        return state;
    },
    Background.FOREST_1
);

const reducers: Record<string, Reducer<Background>> = {
    [LocationAction.SET_BACKGROUND]: setBackgroundReducer,
};

export const locationBackgroundReducer = produce((state: Background, action: Action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}, Background.FOREST_1);

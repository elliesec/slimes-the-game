import { IPointData } from 'pixi.js';
import { Action, Reducer } from 'redux';
import { PayloadAction } from '../reduxUtils';
import { AppAction } from './appActions';

const reducers: Record<string, Reducer<IPointData>> = {
    [AppAction.SET_POSITION]: setPositionReducer,
};

export function appPositionReducer(
    position: IPointData = { x: 0, y: 0 },
    action: Action
): IPointData {
    const reducer = reducers[action.type];
    return reducer ? reducer(position, action) : position;
}

function setPositionReducer(
    position: IPointData,
    { payload }: PayloadAction<IPointData>
): IPointData {
    const { x, y } = position;
    if (x !== payload.x || y !== payload.y) {
        return { ...payload };
    }
    return position;
}

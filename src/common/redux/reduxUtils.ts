import { Action, AnyAction, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../slimes-the-game/redux/store';

export function reducerFromMap<S>(map: Record<string, Reducer<S>>, initialState: S): Reducer<S> {
    return (state: S = initialState, action: Action) => {
        const reducer = map[action.type];
        return reducer ? reducer(state, action) : state;
    };
}

export interface PayloadAction<P, T = string> extends Action<T> {
    payload: P;
}

export type SideEffectsAction<A extends Action = AnyAction, R = any, E = any> = ThunkAction<R, State, E, A>

import { Action, Reducer } from 'redux';

export function reducerFromMap<S>(map: Record<string, Reducer<S>>, initialState: S): Reducer<S> {
    return (state: S = initialState, action: Action) => {
        const reducer = map[action.type];
        return reducer ? reducer(state, action) : state;
    };
}

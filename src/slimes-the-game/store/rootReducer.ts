import produce, { Immutable } from 'immer';
import { Reducer } from 'react';
import { loadingTasksReducer } from './loadingTasks';
import { HookState } from './State';

export type ReducerMap<S, A = any> = {
    [K in keyof S]: Reducer<S[K], A>;
};

function combineReducers<S extends any, A = any>(
    reducers: ReducerMap<S, A>,
): Reducer<Immutable<S>, A> {
    return produce((draft: S, action: A) => {
        Object.keys(reducers).forEach(<K extends keyof S & string>(key: K) => {
            reducers[key](draft[key], action);
        });
    });
}

export const rootReducer: Reducer<Immutable<HookState>, any> = combineReducers<Immutable<HookState>>({
    loadingTasks: loadingTasksReducer,
});

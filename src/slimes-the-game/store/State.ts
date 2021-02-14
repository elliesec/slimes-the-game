import { Immutable } from 'immer';
import { loadingTasksInitialState, LoadingTasksState } from './loadingTasks';

export interface HookState {
    loadingTasks: LoadingTasksState;
}

export function defaultHookState(): Immutable<HookState> {
    return {
        loadingTasks: loadingTasksInitialState(),
    };
}

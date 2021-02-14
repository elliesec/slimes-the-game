import produce from 'immer';
import { PayloadAction } from '../../combat-sandbox-1/redux/redux-utils';
import { reducerFromMap } from '../../common/redux/reduxUtils';
import { CompositeParallelTask } from '../../common/tasks/CompositeParallelTask';
import { CompositeTask } from '../../common/tasks/CompositeTask';
import { Task } from '../../common/tasks/Task';
import { TaskProgress } from '../../common/tasks/TaskProgress';

export interface LoadingTasksState {
    task: CompositeTask;
    progress: TaskProgress;
    complete: boolean;
}

export enum LoadingTasksAction {
    ADD   = 'loadingTasks/add',
    RESET = 'loadingTasks/reset',
}

export const addLoadingTaskReducer = produce(
    (draft: LoadingTasksState, { payload }: PayloadAction<Task>) => {
        if (payload) {
            draft.task.add(payload);
        }
        draft.progress = draft.task.getProgress();
    },
);

export const resetLoadingTasksReducer = produce((draft: LoadingTasksState) => {
    draft.task = new CompositeParallelTask();
    draft.progress.max = 0;
    draft.progress.value = 0;
    draft.progress.complete = true;
    draft.complete = false;
});

export const loadingTasksReducer = reducerFromMap<LoadingTasksState>(
    {
        [LoadingTasksAction.ADD]  : addLoadingTaskReducer,
        [LoadingTasksAction.RESET]: resetLoadingTasksReducer,
    },
    loadingTasksInitialState(),
);

export function loadingTasksInitialState(): LoadingTasksState {
    return {
        task    : new CompositeParallelTask(),
        progress: {
            max     : 0,
            value   : 0,
            complete: true,
        },
        complete: false,
    };
}

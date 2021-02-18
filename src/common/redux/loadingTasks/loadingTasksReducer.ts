import produce from 'immer';
import { CompositeParallelTask } from '../../tasks/CompositeParallelTask';
import { Task } from '../../tasks/Task';
import { TaskProgress } from '../../tasks/TaskProgress';
import { PayloadAction, reducerFromMap } from '../reduxUtils';
import { LoadingTasksAction } from './loadingTasksActions';
import { loadingTasksInitialState, LoadingTasksState } from './loadingTasksState';

const addLoadingTaskReducer = produce(
    (draft: LoadingTasksState, { payload }: PayloadAction<Task>) => {
        if (payload) {
            draft.task.add(payload);
        }
        draft.progress = draft.task.getProgress();
        console.log(draft.progress);
    },
);

const resetLoadingTasksReducer = produce((draft: LoadingTasksState) => {
    draft.task = new CompositeParallelTask('Composite Loading Task');
    draft.progress.max = 0;
    draft.progress.value = 0;
    draft.progress.complete = true;
});

const updateLoadingTasksProgressReducer = produce(
    (draft: LoadingTasksState, { payload }: PayloadAction<TaskProgress>) => {
        if (payload) {
            draft.progress = payload;
        }
    },
);

export const loadingTasksReducer = reducerFromMap<LoadingTasksState>(
    {
        [LoadingTasksAction.ADD]            : addLoadingTaskReducer,
        [LoadingTasksAction.RESET]          : resetLoadingTasksReducer,
        [LoadingTasksAction.UPDATE_PROGRESS]: updateLoadingTasksProgressReducer,
    },
    loadingTasksInitialState(),
);

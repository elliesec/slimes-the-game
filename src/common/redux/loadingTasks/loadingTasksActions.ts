import { Action } from 'redux';
import { Task } from '../../tasks/Task';
import { TaskProgress } from '../../tasks/TaskProgress';
import { PayloadAction } from '../reduxUtils';

export enum LoadingTasksAction {
    ADD = 'loadingTasks/add',
    RESET = 'loadingTasks/reset',
    UPDATE_PROGRESS = 'loadingTasks/updateProgress',
}

export function addLoadingTask(task: Task): PayloadAction<Task> {
    return { type: LoadingTasksAction.ADD, payload: task };
}

export function resetLoadingTasks(): Action {
    return { type: LoadingTasksAction.RESET };
}

export function updateLoadingTasksProgress(progress: TaskProgress): PayloadAction<TaskProgress> {
    return { type: LoadingTasksAction.UPDATE_PROGRESS, payload: progress };
}

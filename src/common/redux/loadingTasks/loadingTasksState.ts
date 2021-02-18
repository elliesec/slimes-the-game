import { CompositeParallelTask } from '../../tasks/CompositeParallelTask';
import { CompositeTask } from '../../tasks/CompositeTask';
import { TaskProgress } from '../../tasks/TaskProgress';

export interface LoadingTasksState {
    task: CompositeTask;
    progress: TaskProgress;
}

export interface WithLoadingTasksState {
    loadingTasks: LoadingTasksState;
}

export function loadingTasksInitialState(): LoadingTasksState {
    return {
        task    : new CompositeParallelTask('Composite Loading Task'),
        progress: {
            max     : 0,
            value   : 0,
            complete: true,
        },
    };
}

import { PayloadAction, reducerFromMap } from '../reduxUtils';
import { Job } from './jobState';
import { JobAction, TaskUpdate } from './jobActions';
import produce from 'immer';

const clearLoadingJobsReducer = (): Job[] => [];

const addLoadingJobReducer = produce((state: Job[], action: PayloadAction<Job>) => {
    if (action.payload) {
        state.push(action.payload);
    }
}, []);

const updateLoadingJobTaskReducer = produce((state: Job[], action: PayloadAction<TaskUpdate>) => {
    const { jobId, taskId, status } = action.payload;
    const job = state.find((j) => j.id === jobId);
    const task = job.tasks.find((t) => t.id === taskId);
    task.status = status;
});

export const jobLoadingJobsReducer = reducerFromMap<Job[]>(
    {
        [JobAction.CLEAR_LOADING_JOBS]: clearLoadingJobsReducer,
        [JobAction.ADD_LOADING_JOB]: addLoadingJobReducer,
        [JobAction.UPDATE_LOADING_JOB_TASK]: updateLoadingJobTaskReducer,
    },
    []
);

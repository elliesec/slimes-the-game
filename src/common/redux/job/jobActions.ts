import { Action } from 'redux';
import { Job, TaskStatus } from './jobState';
import { PayloadAction } from '../../../combat-sandbox-1/redux/redux-utils';
import { BaseJob } from '../../model/job/BaseJob';
import { ThunkAction } from 'redux-thunk';

export interface TaskUpdate {
    jobId: string;
    taskId: string;
    status: TaskStatus;
}

export enum JobAction {
    CLEAR_LOADING_JOBS = 'job/clear-loading-jobs',
    ADD_LOADING_JOB = 'job/add-loading-job',
    UPDATE_LOADING_JOB_TASK = 'job/update-loading-job-task',
}

export function jobClearLoadingJobs(): Action {
    return { type: JobAction.CLEAR_LOADING_JOBS };
}

export function jobAddLoadingJob<S>(job: BaseJob): ThunkAction<void, S, void, Action<JobAction>> {
    return (dispatch) => {
        dispatch(addLoadingJob(job.serialize()));
        job.onChange((jobObj, task) => {
            dispatch(updateLoadingJobTask(jobObj.id, task.id, task.status));
        });
    };
}

function addLoadingJob(job: Job): PayloadAction<Job, JobAction> {
    return { type: JobAction.ADD_LOADING_JOB, payload: job };
}

function updateLoadingJobTask(
    jobId: string,
    taskId: string,
    status: TaskStatus
): PayloadAction<TaskUpdate, JobAction> {
    return { type: JobAction.UPDATE_LOADING_JOB_TASK, payload: { jobId, taskId, status } };
}

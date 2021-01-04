import { createSelector } from 'reselect';
import { combineProgressStats, progressFromJob } from '../../model/job/jobUtils';
import { Job, WithJobState } from './jobState';

export function getLoadingJobs(state: WithJobState): Job[] {
    return state.job.loadingJobs;
}

export const getLoadingJobProgress = createSelector([getLoadingJobs], (loadingJobs) => {
    return combineProgressStats(...loadingJobs.map(progressFromJob));
});

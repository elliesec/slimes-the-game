import { combineReducers } from 'redux';
import { JobState } from './jobState';
import { jobLoadingJobsReducer } from './jobLoadingJobsReducer';

export const jobReducer = combineReducers<JobState>({
    loadingJobs: jobLoadingJobsReducer,
});

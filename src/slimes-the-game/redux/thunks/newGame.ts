import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { DelayJob } from '../../../common/model/job/jobs/DelayJob';
import { appSetView } from '../../../common/redux/app/appActions';
import { AppView } from '../../../common/redux/app/appState';
import { jobAddLoadingJob } from '../../../common/redux/job/jobActions';
import { State } from '../store';

export function newGameThunk(): ThunkAction<void, State, void, Action> {
    return (dispatch) => {
        const job = new DelayJob(10000);
        dispatch(jobAddLoadingJob(job));
        dispatch(appSetView(AppView.DEFAULT));
    };
}

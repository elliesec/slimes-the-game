import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { WorldMapGenerator } from '../../../common/map/world/WorldMapGenerator';
import { DelayJob } from '../../../common/model/job/jobs/DelayJob';
import { appSetView } from '../../../common/redux/app/appActions';
import { AppView } from '../../../common/redux/app/appState';
import { jobAddLoadingJob } from '../../../common/redux/job/jobActions';
import { State } from '../store';

export function newGameThunk(): ThunkAction<void, State, void, Action> {
    return (dispatch) => {
        const delayJob = new DelayJob(3000);
        dispatch(jobAddLoadingJob(delayJob));

        const worldMapGenerator = new WorldMapGenerator({ width: 100, height: 80, seed: 'test' });
        const worldMapGenerationJob = worldMapGenerator.generate();
        dispatch(jobAddLoadingJob(worldMapGenerationJob));

        dispatch(appSetView(AppView.DEFAULT));
    };
}

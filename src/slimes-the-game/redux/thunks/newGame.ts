import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { WorldMapGenerationJob } from '../../../common/map/world/job/WorldMapGenerationJob';
import { WorldMapGenerator } from '../../../common/map/world/WorldMapGenerator';
import { DelayJob } from '../../../common/model/job/jobs/DelayJob';
import { appSetView } from '../../../common/redux/app/appActions';
import { AppView } from '../../../common/redux/app/appState';
import { jobAddLoadingJob } from '../../../common/redux/job/jobActions';
import { log } from '../../../common/util/Log';
import { State } from '../store';

export function newGameThunk(): ThunkAction<void, State, void, Action> {
    return (dispatch) => {
        const job = new DelayJob(10000);
        dispatch(jobAddLoadingJob(job));
        const worldMapGenerator = new WorldMapGenerator({ width: 8, height: 6, seed: 'test' });
        const worldMapGenerationJob = worldMapGenerator.generate();
        dispatch(jobAddLoadingJob(worldMapGenerationJob));
        waitForMapGeneration(worldMapGenerationJob);
        dispatch(appSetView(AppView.DEFAULT));
    };
}

async function waitForMapGeneration(mapGenerationJob: WorldMapGenerationJob): Promise<void> {
    const worldMap = await mapGenerationJob.promise();
    log.info('World Map', JSON.stringify(worldMap, null, 4));
}

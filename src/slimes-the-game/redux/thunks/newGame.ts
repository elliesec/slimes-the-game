import { WorldMapGenerator } from '../../../common/map/world/WorldMapGenerator';
import { addLoadingTask } from '../../../common/redux/loadingTasks/loadingTasksActions';
import { SideEffectsAction } from '../../../common/redux/reduxUtils';

export function newGameAction(): SideEffectsAction {
    return (dispatch) => {
        const worldMapGenerator = new WorldMapGenerator({ width: 100, height: 80, seed: 'test' });
        const worldMapGenerationTask = worldMapGenerator.generate();
        dispatch(addLoadingTask(worldMapGenerationTask));
    };
}

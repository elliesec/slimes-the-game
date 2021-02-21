import { WorldMapGenerator } from '../../../common/map/world/WorldMapGenerator';
import { addLoadingTask } from '../../../common/redux/loadingTasks/loadingTasksActions';
import { SideEffectsAction } from '../../../common/redux/reduxUtils';

export function newGameAction(): SideEffectsAction {
    return (dispatch) => {
        const worldMapGenerator = new WorldMapGenerator({ width: 200, height: 160, seed: 'test' });
        const worldMapGenerationTask = worldMapGenerator.generate();
        dispatch(addLoadingTask(worldMapGenerationTask));
    };
}

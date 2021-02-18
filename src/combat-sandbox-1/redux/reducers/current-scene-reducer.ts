import { Action, Reducer } from 'redux';
import { PayloadAction } from '../../../common/redux/reduxUtils';
import { Scene } from '../../enums';
import { GameActions } from '../actions/game-actions';

const reducers: Record<string, Reducer<Scene>> = {
    [GameActions.SET_SCENE]: setSceneReducer,
};

export function currentSceneReducer(currentScene = Scene.ENCOUNTER_SELECT, action: Action): Scene {
    const reducer = reducers[action.type];
    return reducer ? reducer(currentScene, action) : currentScene;
}

function setSceneReducer(currentScene: Scene, { payload }: PayloadAction<Scene>): Scene {
    return payload;
}

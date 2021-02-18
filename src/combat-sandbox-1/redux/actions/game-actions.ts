import { PayloadAction } from '../../../common/redux/reduxUtils';
import { Scene } from '../../enums';

export enum GameActions {
    SET_SCENE = 'SET_SCENE',
}

export function setScene(scene: Scene): PayloadAction<Scene> {
    return { type: GameActions.SET_SCENE, payload: scene };
}

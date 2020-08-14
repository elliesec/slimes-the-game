import { Scene } from '../../enums';
import { PayloadAction } from '../redux-utils';

export enum GameActions {
    SET_SCENE = 'SET_SCENE',
}

export function setScene(scene: Scene): PayloadAction<Scene> {
    return { type: GameActions.SET_SCENE, payload: scene };
}

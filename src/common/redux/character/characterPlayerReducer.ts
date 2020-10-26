import produce from 'immer';
import { Action } from 'redux';
import { Player } from '../../model/character/Player';

export const characterPlayerReducer = produce((state: Player, action: Action) => {
    return state;
}, null);

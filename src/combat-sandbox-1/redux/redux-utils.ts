import { Action } from 'redux';

export interface PayloadAction<P, T = string> extends Action<T> {
    payload: P;
}

import { Action } from 'redux';

export interface PayloadAction<P> extends Action<string> {
    payload: P;
}

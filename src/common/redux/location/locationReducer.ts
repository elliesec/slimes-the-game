import { combineReducers } from 'redux';
import { locationBackgroundReducer } from './locationBackgroundReducer';
import { LocationState } from './locationState';

export const locationReducer = combineReducers<LocationState>({
    background: locationBackgroundReducer,
});

import { combineReducers } from 'redux';
import { appReducer } from '../../common/redux/app/appReducer';
import { State } from './store';

export const rootReducer = combineReducers<State>({
    app: appReducer,
});

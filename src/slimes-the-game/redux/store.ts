import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from '../../common/redux/app/appState';
import { rootReducer } from './rootReducer';

export interface State {
    app: AppState;
}

export const store = createStore(rootReducer, composeWithDevTools());

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from '../../common/redux/app/appState';
import { WithItemState } from '../../common/redux/item/itemState';
import { WithItemFamilyState } from '../../common/redux/itemFamily/itemFamilyState';
import { rootReducer } from './rootReducer';

export interface State extends WithItemFamilyState, WithItemState {
    app: AppState;
}

export const store = createStore(rootReducer, composeWithDevTools());

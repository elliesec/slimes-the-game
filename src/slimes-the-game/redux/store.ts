import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { WithAppState } from '../../common/redux/app/appState';
import { WithCharacterState } from '../../common/redux/character/characterState';
import { WithConfigState } from '../../common/redux/config/configState';
import { WithItemState } from '../../common/redux/item/itemState';
import { WithItemFamilyState } from '../../common/redux/itemFamily/itemFamilyState';
import { WithLocationState } from '../../common/redux/location/locationState';
import { rootReducer } from './rootReducer';
import { WithJobState } from '../../common/redux/job/jobState';

export interface State
    extends WithAppState,
        WithItemFamilyState,
        WithItemState,
        WithCharacterState,
        WithLocationState,
        WithConfigState,
        WithJobState {}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

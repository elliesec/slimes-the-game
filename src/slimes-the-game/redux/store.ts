import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { WithAppState } from '../../common/redux/app/appState';
import { WithCharacterState } from '../../common/redux/character/characterState';
import { WithItemState } from '../../common/redux/item/itemState';
import { WithItemFamilyState } from '../../common/redux/itemFamily/itemFamilyState';
import { WithLocationState } from '../../common/redux/location/locationState';
import { rootReducer } from './rootReducer';

export interface State
    extends WithAppState,
        WithItemFamilyState,
        WithItemState,
        WithCharacterState,
        WithLocationState {}

export const store = createStore(rootReducer, composeWithDevTools());

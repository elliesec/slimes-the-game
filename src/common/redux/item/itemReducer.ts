import { combineReducers } from 'redux';
import { itemByFamilyReducer } from './itemByFamilyReducer';
import { itemByIdReducer } from './itemByIdReducer';
import { ItemState } from './itemState';

export const itemReducer = combineReducers<ItemState>({
    byId: itemByIdReducer,
    byFamily: itemByFamilyReducer,
});

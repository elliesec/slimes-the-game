import { combineReducers } from 'redux';
import { itemByIdReducer } from './itemByIdReducer';
import { ItemState } from './itemState';

export const itemReducer = combineReducers<ItemState>({
    byId: itemByIdReducer,
});

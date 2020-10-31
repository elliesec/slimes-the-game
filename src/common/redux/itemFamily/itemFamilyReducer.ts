import { combineReducers } from 'redux';
import { itemFamilyByTypeReducer } from './itemFamilyByTypeReducer';
import { ItemFamilyState } from './itemFamilyState';

export const itemFamilyReducer = combineReducers<ItemFamilyState>({
    byType: itemFamilyByTypeReducer,
});

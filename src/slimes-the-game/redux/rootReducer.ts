import { combineReducers } from 'redux';
import { appReducer } from '../../common/redux/app/appReducer';
import { characterReducer } from '../../common/redux/character/characterReducer';
import { itemReducer } from '../../common/redux/item/itemReducer';
import { itemFamilyReducer } from '../../common/redux/itemFamily/itemFamilyReducer';
import { State } from './store';

export const rootReducer = combineReducers<State>({
    app: appReducer,
    itemFamily: itemFamilyReducer,
    item: itemReducer,
    character: characterReducer,
});

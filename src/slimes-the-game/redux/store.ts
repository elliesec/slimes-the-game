import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AppAction } from '../../common/redux/app/appActions';
import { WithAppState } from '../../common/redux/app/appState';
import { WithCharacterState } from '../../common/redux/character/characterState';
import { WithConfigState } from '../../common/redux/config/configState';
import { WithItemState } from '../../common/redux/item/itemState';
import { WithItemFamilyState } from '../../common/redux/itemFamily/itemFamilyState';
import { WithJobState } from '../../common/redux/job/jobState';
import { WithLoadingTasksState } from '../../common/redux/loadingTasks/loadingTasksState';
import { WithLocationState } from '../../common/redux/location/locationState';
import { rootReducer } from './rootReducer';

export interface State
    extends WithAppState,
        WithItemFamilyState,
        WithItemState,
        WithCharacterState,
        WithLocationState,
        WithConfigState,
        WithJobState,
        WithLoadingTasksState {
}

const composeEnhancers = composeWithDevTools({
    actionSanitizer: (action: any) => {
        if (action.type === AppAction.SET_PIXI_APP) {
            return { ...action, payload: '<PIXI App>' };
        }
        return action;
    },
    stateSanitizer : (state: any) => {
        if (state.app?.pixiApp) {
            return {
                ...state,
                app: { ...state.app, pixiApp: '<PIXI App>' },
            };
        }
        return state;
    },
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

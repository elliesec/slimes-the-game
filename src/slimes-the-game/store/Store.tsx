import { Immutable } from 'immer';
import React, { createContext, Dispatch, PropsWithChildren, Reducer, useReducer } from 'react';
import { rootReducer } from './rootReducer';
import { defaultHookState, HookState } from './State';

export const StoreContext = createContext(defaultHookState());
export const DispatchContext = createContext<Dispatch<any>>(null);

export const Store = ({ children }: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer<Reducer<Immutable<HookState>, any>>(
        rootReducer,
        defaultHookState(),
    );
    return (
        <DispatchContext.Provider value={dispatch}>
            <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
        </DispatchContext.Provider>
    );
};

import 'pixi.js';
import React, { createContext } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import './index.scss';
import { State, store } from './slimes-the-game/redux/store';
import './slimes-the-game/SlimesTheGame';
import { SlimesTheGame } from './slimes-the-game/SlimesTheGame';

const appRoot = document.getElementById('app-root');
export const DispatchContext = createContext<ThunkDispatch<State, any, Action>>(store.dispatch);

render(
    <Provider store={store}>
        <DispatchContext.Provider value={store.dispatch}>
            <SlimesTheGame />
        </DispatchContext.Provider>
    </Provider>,
    appRoot
);

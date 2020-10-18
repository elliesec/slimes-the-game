import 'pixi.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from './slimes-the-game/redux/store';
import './slimes-the-game/SlimesTheGame';
import { SlimesTheGame } from './slimes-the-game/SlimesTheGame';

const appRoot = document.getElementById('app-root');

render(
    <Provider store={store}>
        <SlimesTheGame />
    </Provider>,
    appRoot
);

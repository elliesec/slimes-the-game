import 'pixi.js';
import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import './slimes-the-game/SlimesTheGame';
import { SlimesTheGame } from './slimes-the-game/SlimesTheGame';

const appRoot = document.getElementById('app-root');

render(<SlimesTheGame />, appRoot);

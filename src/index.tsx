import 'pixi.js';
import { h, render } from 'preact';
import './index.scss';
import './slimes-the-game/SlimesTheGame';
import { SlimesTheGame } from './slimes-the-game/SlimesTheGame';

const appRoot = document.getElementById('app-root');

render(<SlimesTheGame />, appRoot);

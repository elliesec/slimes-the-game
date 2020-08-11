import { h, render } from 'preact';
import './index.scss';
import { SiteMap } from './site-map/SiteMap';

const appRoot = document.getElementById('app-root');

render(<SiteMap />, appRoot);

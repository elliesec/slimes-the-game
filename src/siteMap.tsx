import { h, render } from 'preact';
import './index.scss';
import { SiteMap } from './siteMap/SiteMap';

const appRoot = document.getElementById('app-root');

render(<SiteMap />, appRoot);

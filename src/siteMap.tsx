import { h, render } from 'preact';
import * as pages from '../config/pages';
import './index.scss';
import { SiteMap } from './siteMap/SiteMap';

const appRoot = document.getElementById('app-root');

render(<SiteMap />, appRoot);

console.log('This is the site map');
console.log('Here are the available pages:');
pages.forEach((page) => {
    console.log(page.name);
});

import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { SiteMap } from './site-map/SiteMap';

const appRoot = document.getElementById('app-root');

render(<SiteMap />, appRoot);

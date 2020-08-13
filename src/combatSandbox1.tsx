import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { ConnectedCombatSandbox1 } from './combat-sandbox-1/CombatSandbox1';
import { store } from './combat-sandbox-1/redux/store';
import './index.scss';

const appRoot = document.getElementById('app-root');

render(
    <Provider store={store}>
        <ConnectedCombatSandbox1 />
    </Provider>,
    appRoot
);

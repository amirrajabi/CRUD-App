import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const rootNode = document.getElementById('root');

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

render(<Root />, rootNode);

serviceWorker.unregister();

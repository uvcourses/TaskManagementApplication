import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationRouter from './routers/ApplicationRouter';
import getAppStore from './store/store';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <ApplicationRouter />
    </Provider>
);


ReactDOM.render(template, document.getElementById('app'));
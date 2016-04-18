import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Dashboard from './pages/dashboard'

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById('app')
);
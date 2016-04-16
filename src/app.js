import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Wrapper from './pages/wrapper'

ReactDOM.render(
    <Provider store={store}>
        <Wrapper />
    </Provider>,
    document.getElementById('app')
);

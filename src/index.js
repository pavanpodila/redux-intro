import '../node_modules/bootstrap/dist/css/bootstrap-flex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./store/index";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

const root = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));


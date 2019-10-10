import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import AppContainer from './containers/AppContainer.js';

import configureStore from './reducers/configureStore';
import reducers from './reducers/configReducers';

import 'antd/dist/antd.css';
import "./styles/App.css"

export const MAIN_PAGE_ROUTE = "/";
export const PRODUCT_PAGE_ROUTE = "/products";
export const PRODUCT_ITEM_PAGE_ROUTE = "/products/:productId";

render((
    <Provider store={configureStore(reducers)}>
        <Router>
            <div className={"container"}>
                <AppContainer/>
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
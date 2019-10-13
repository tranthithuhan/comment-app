import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Route, Switch} from 'react-router';
import { ConnectedRouter } from 'connected-react-router'

import AppContainer from './containers/AppContainer.js';
import Login from "./containers/Login";

import configureStore from './reducers/configureStore';
import {reducers, history} from './reducers/configReducers';

import 'antd/dist/antd.css';
import "./styles/App.css"

export const MAIN_PAGE_ROUTE = "/";
export const LOGIN_PAGE_ROUTE = "/login";
export const PRODUCT_PAGE_ROUTE = "/products";
export const PRODUCT_ITEM_PAGE_ROUTE = "/products/:productId";


export const Main = () => (
    <Provider store={configureStore(reducers)}>
        <ConnectedRouter history={history}>
            <div className={"container"}>
                <Switch>
                    <Route exact key={LOGIN_PAGE_ROUTE} path={LOGIN_PAGE_ROUTE} component={Login}/>
                    <Route key={MAIN_PAGE_ROUTE} path={MAIN_PAGE_ROUTE} component={AppContainer}/>
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
);
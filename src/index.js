import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router, Redirect} from 'react-router-dom';

import AppContainer from './containers/AppContainer.js';

import "./styles/App.css"

export const MAIN_PAGE_ROUTE = "/";

render((
    <Router>
        <div className={"container"}>
            <Route path={MAIN_PAGE_ROUTE} component={AppContainer} />
            <Redirect to='/' />
        </div>
    </Router>
), document.getElementById('root'));
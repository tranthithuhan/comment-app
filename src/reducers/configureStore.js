import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {history} from "./configReducers";

const configureStore = reducers => {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = [
        thunk,
        routerMiddleware(history)
    ];

    return createStore(
        reducers,
        composeEnhancer(applyMiddleware(...middlewares)),
    );
};

export default configureStore;
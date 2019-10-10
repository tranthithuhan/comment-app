import {createStore} from 'redux';

const configureStore = reducers => {

    const middlewares = [];

    return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export default configureStore;
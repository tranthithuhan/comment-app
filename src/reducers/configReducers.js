import {combineReducers} from 'redux';
import reducer from './reducer';
import {connectRouter} from "connected-react-router";
import createHistory from "history/createHashHistory";

export const history = createHistory();

export const reducers = combineReducers({
    router: connectRouter(history),
    reducer,
});

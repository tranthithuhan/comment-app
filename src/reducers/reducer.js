import nanoid from 'nanoid';
import moment from 'moment';
import {PRODUCTS} from "../utils/data";
import {loginUser} from "../utils/utils";

const ADD_COMMENT = 'ADD_COMMENT';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

const INITIAL_STATE = {
    me: {},
    products: PRODUCTS
};

export const login = (username, password) => {
    return (dispatch, getState) => {
        return loginUser(username, password)
            .then((user) => {
                dispatch({type: USER_LOGIN_SUCCESS, user: user});
                return user
            })
            .catch(e => dispatch({type: USER_LOGIN_ERROR, error: e}));
    };
};
export const logout = (username, password) => {
    return (dispatch, getState) => {
        return Promise.resolve(true).then(e => dispatch({type: USER_LOGOUT_SUCCESS}));
    };
};

export const addComment = (productId, comment, isPrivate) => ({
    type: ADD_COMMENT,
    productId,
    comment,
    isPrivate
});

const boards = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return addProductComment(state, action);

        case USER_LOGIN_SUCCESS:
            return userLogin(state, action);

        case USER_LOGOUT_SUCCESS:
            return userLogout(state, action);

        default:
            return state;
    }
};

function userLogin(state, action) {
    return Object.assign({}, state, {
        me: action.user
    });
}

function userLogout(state, action) {
    return Object.assign({}, state, {
        me: {}
    });
}

function addProductComment(state, action) {
    const products = state.products.map(product => {
        const comments = product.comments || [];

        if (product.id === action.productId)
            return {
                ...product,
                comments: [
                    ...comments, {
                        id: nanoid(),
                        content: action.comment,
                        author: state.me,
                        datetime: moment(),
                        isPrivate: action.isPrivate
                    }]
            };

        return product;
    });

    return Object.assign({}, state, {products: products});
}

export default boards;
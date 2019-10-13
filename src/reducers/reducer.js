import nanoid from 'nanoid';
import moment from 'moment';
import {PRODUCTS} from "../utils/data";
import {loginUser} from "../utils/utils";

const ADD_COMMENT = 'ADD_COMMENT';

const INITIAL_STATE = {
    me: {},
    products: PRODUCTS
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

        default:
            return state;
    }
};

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
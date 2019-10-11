import nanoid from 'nanoid';
import moment from 'moment';

const ADD_COMMENT = 'ADD_COMMENT';

const meId = nanoid();
const me = {
    id: meId,
    name: "Han",
    avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
};

const INITIAL_STATE = {
    me: me,
    products: [
        {
            id: nanoid(),
            name: "Produit 1",
            description: "Produit 1",
            seller: me,
            comments: [
                {
                    author: {
                        id: nanoid(),
                        name: 'Han Solo',
                        avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                    },
                    content: "Helllooo",
                    datetime: moment().fromNow(),
                    isPrivate: true
                },
            ]
        },
        {
            id: nanoid(),
            name: "Produit 2",
            description: "Produit 2"
        },
        {
            id: nanoid(),
            name: "Produit 3",
            description: "Produit 3"
        }
    ]
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
            debugger
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
                        author: me,
                        datetime: moment().fromNow(),
                        isPrivate: action.isPrivate
                    }]
            };

        return product;
    });

    console.log(products)
    return {
        ...state,
        products
    };
}

export default boards;
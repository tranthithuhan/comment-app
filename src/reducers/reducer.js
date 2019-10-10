import nanoid from 'nanoid';

const GET_LIST = 'GET_LIST';

const INITIAL_STATE = {
    products: [
        {id: nanoid(), name: "Produit 1", description: "Produit 1"},
        {id: nanoid(), name: "Produit 2", description: "Produit 2"},
        {id: nanoid(), name: "Produit 3", description: "Produit 3"}
    ]
};

export const getList = boardName => ({
    type: GET_LIST,
    payload: {
        id: nanoid(), name: "Produit 1",
        title: boardName,
    },
});

const boards = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST:
            return state.concat(action.payload);
        default:
            return state;
    }
};

export default boards;
import nanoid from "nanoid";
import moment from "moment";

export const USERS = [
    {
        id: 1,
        name: "Han",
        username: "han",
        password: "han",
        avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
    },
    {
        id: 2,
        name: "Alex",
        username: "alex",
        password: "alex",
        avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
    },
    {
        id: 3,
        name: "Koitess",
        username: "koitess",
        password: "koitess",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1200px-Cute_dog.jpg',
    }
];

export const PRODUCTS = [
    {
        id: 1,
        name: "Produit 1",
        description: "Produit 1",
        seller: {
            id: 1,
            name: "Han",
            avatar: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
        },
        comments: [
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire privé",
                datetime: moment().subtract(1, "day"),
                isPrivate: true
            },
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire public",
                datetime: moment().subtract(3, "day"),
                isPrivate: false
            },
        ]
    },
    {
        id: 2,
        name: "Produit 2",
        description: "Produit 2",
        seller: {
            id: 2,
            name: "Alex",
            avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
        },
        comments: [
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire privé",
                datetime: moment().subtract(1, "day"),
                isPrivate: true
            },
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire public",
                datetime: moment().subtract(2, "day"),
                isPrivate: false
            },
        ]
    },
    {
        id: 3,
        name: "Produit 3",
        description: "Produit 3",
        seller: {
            id: 2,
            name: "Alex",
            avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
        },
        comments: [
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire privé",
                datetime: moment(),
                isPrivate: true
            },
            {
                author: {
                    id: 2,
                    name: "Alex",
                    avatar: 'http://www.pethealthnetwork.com/sites/default/files/content/images/5-silent-killers-cats-475212379.jpg',
                },
                content: "Ceci est un commentaire public",
                datetime: moment(),
                isPrivate: false
            },
        ]
    }
];
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import * as routerActions from "react-router-redux";
import {USERS} from "./data";

export const commentsFilter = (comment, sellerId, meId) => {
    return meId === sellerId ||
        !comment.isPrivate ||
        comment.author.id === meId;
};

export const loginUser = (username, password) => new Promise((resolve, reject) => {
    const userExist = USERS.find(user => user.username === username && user.password === password);

    if (userExist !== undefined) {
        const {password, ...newUser} = userExist;
        resolve(newUser);
    } else reject();
});

export const userIsAuthenticatedRedir = connectedReduxRedirect({
    authenticatedSelector: state => {
        return state.reducer.me && state.reducer.me.id
    },
    redirectPath: '/login',
    redirectAction: routerActions.replace,
});
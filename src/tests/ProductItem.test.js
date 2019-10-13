import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ProductItem} from '../containers/ProductItem';
import {shallowWrap} from "../utils/test";
import moment from "moment";

configure({adapter: new Adapter(), disableLifecycleMethods: true});

function setup(p) {

    const props = {
        meId: 1,
        product :{
            id: 2,
            name: "Produit 2",
            description: "Produit 2",
            seller: {
                id: 1,
                name: "Han",
                avatar: "avatar.jpg"
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
                }
            ]
        },
        ...p
    };

    const wrapper = shallowWrap(<ProductItem {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<ProductItem />', () => {
    let {wrapper, props} = setup({});

    it('should render Product item', () => {
        expect(wrapper.find(".product-item").length).toBe(1);
        expect(wrapper.find("Descriptions").props().title).toBe("Produit 2");
        expect(wrapper.find("Avatar").props().src).toBe("avatar.jpg");
        expect(wrapper.find("CommentList").length).toBe(1);
        expect(wrapper.find("CommentList").props().comments.length).toBe(1);
    });

});


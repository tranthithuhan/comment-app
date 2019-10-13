import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ProductList} from '../containers/ProductList';
import {shallowWrap} from "../utils/test";
import moment from "moment";

configure({adapter: new Adapter(), disableLifecycleMethods: true});

function setup(p) {

    const props = {
        meId: 1,
        products :[{
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
        }],
        ...p
    };

    const wrapper = shallowWrap(<ProductList {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<ProductList />', () => {
    let {wrapper, props} = setup({});

    it('should render Product list', () => {
        expect(wrapper.find(".product-list").length).toBe(1);
        expect(wrapper.find(".product-list").props().dataSource.length).toBe(1);
    });

});


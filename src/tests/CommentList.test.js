import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CommentList from '../components/CommentList';
import {shallowWrap} from "../utils/test";

configure({adapter: new Adapter(), disableLifecycleMethods: true});

function setup(p) {

    const props = {
        me: {
            id: 1,
            name: "Han",
            avatar: "avatar.jpg"
        },
        comments: [],
        ...p
    };

    const wrapper = shallowWrap(<CommentList {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<CommentList />', () => {
    let {wrapper, props} = setup({});

    it('should render list', () => {
        expect(wrapper.find("List").length).toBe(1)
    });

    it('have no item if comments list is empty', () => {
        expect(wrapper.props().dataSource.length).toBe(0)
    });

    it('have no item if comments list is empty', () => {
        wrapper = setup({
            comments: [
                {
                    content: "Hello world",
                    author: {id: 1, name: "Han"}
                }
            ]
        }).wrapper;
        expect(wrapper.props().dataSource.length).toBe(1)
    });
});


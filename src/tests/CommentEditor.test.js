import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CommentEditor} from '../containers/CommentEditor';
import {shallowWrap} from "../utils/test";

configure({adapter: new Adapter(), disableLifecycleMethods: true});
function setup(p) {

    const props = {
        me: {
            id: 1,
            name: "Han",
            avatar: "avatar.jpg"
        },
        addComment: jest.fn(),
        ...p
    };

    const wrapper = shallowWrap(<CommentEditor {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<CommentEditor />', () => {
    const {wrapper, props} = setup({});

    it('should render a class comment-editor ', () => {
        expect(wrapper.find(".comment-editor").length).toBe(1)
    });

    it('should be private after clicked on checkbox ', () => {
        wrapper.find('Checkbox').simulate('change', { target: { checked: true } });

        expect(wrapper.state().isPrivate).toBe(true)
    });

    it('should update comment', () => {
        wrapper.find('TextArea').simulate('change', { target: { value: "hello" } });

        expect(wrapper.state().comment).toBe("hello")
    });

    it('should add Comment on click on the button', () => {
        wrapper.find('Button').simulate('click');

        expect(props.addComment).toBeCalled();
    });
});


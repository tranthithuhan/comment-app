import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AppMenu} from '../containers/AppMenu';
import {shallowWrap} from "../utils/test";

configure({adapter: new Adapter(), disableLifecycleMethods: true});
function setup(p) {

    const props = {
        me: {
            id: 1,
            name: "Han",
            avatar: "avatar.jpg"
        },
        logout: jest.fn().mockImplementation(() => Promise.resolve()),
        onClick: jest.fn(),
        ...p
    };

    const wrapper = shallowWrap(<AppMenu {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<AppMenu />', () => {
    const {wrapper, props} = setup({});

    it('should render a Menu ', () => {
        expect(wrapper.find("Menu").length).toBe(1)
    });

    it('should call lougout when click on logout button', () => {
        wrapper.find('Menu').simulate('click', {key: "logout"});

        expect(props.logout).toBeCalled();
    });
});


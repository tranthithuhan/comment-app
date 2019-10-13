import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Login} from '../containers/Login';
import {shallowWrap} from "../utils/test";

configure({adapter: new Adapter(), disableLifecycleMethods: true});

function setup(p) {

    const props = {
        meId: 1,
        login: jest.fn().mockImplementation(() => Promise.resolve()),
        ...p
    };

    const wrapper = shallowWrap(<Login {...props}/>);

    return {
        props,
        wrapper
    }
}

describe('<Login />', () => {
    let {wrapper, props} = setup({});

    it('should render login form', () => {
        expect(wrapper.find(".login-form").length).toBe(1);
        wrapper.find('Form').simulate('change', { target: { name: "username", value: "han" } });
        wrapper.find('Form').simulate('change', { target: { name: "password", value: "password" } });

        expect(wrapper.state().username).toBe("han");
        expect(wrapper.state().password).toBe("password");

        wrapper.find('Form').simulate('submit', {preventDefault: jest.fn()});

        expect(props.login).toBeCalled();
    });

});


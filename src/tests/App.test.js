import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AppContainer} from '../containers/AppContainer';
import {shallowWrap} from "../utils/test";

configure({adapter: new Adapter(), disableLifecycleMethods: true});


describe('<AppContainer />', () => {
    const wrapper = shallowWrap(<AppContainer/>);

    it('should render with classname app-container', () => {
        expect(wrapper.find(".app-container").length).toBe(1)
    });

    it('left menu is not collapsed by default', () => {
        expect(wrapper.state().siderIsCollapsed).toBe(false)
    });

    it('menu is collapsed after click on the Icon', () => {
        wrapper.find('Icon').simulate('click');

        expect(wrapper.state().siderIsCollapsed).toBe(true)
    });
});


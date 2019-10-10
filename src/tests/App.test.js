import React from 'react';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AppContainer from '../containers/AppContainer';

configure({adapter: new Adapter(), disableLifecycleMethods: true});


describe('<AppMenu />', () => {
    const wrapper = shallow(<AppContainer/>);

    it('renders without app container', () => {
        // expect(wrapper.find(".app-container").length).toBe(1)
    });
});


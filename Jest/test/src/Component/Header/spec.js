import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without errors', () => {
        const wrapper = component.find('headerComponent');
        expect(wrapper.length).toBe(1);

    });
});
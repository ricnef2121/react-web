import React from 'react';
import { shallow } from 'enzyme';
import {findByAtrr}  from '../../utils'
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
        //const wrapper = component.find('.headerComponent');
        const wrapper =  findByAtrr(component,'headerComponent');
        expect(wrapper.length).toBe(1);

    });
    it('should render a logo ', () => {
        const logo = findByAtrr(component,'logoImg');
        expect(logo.length).toBe(1);
    });
});
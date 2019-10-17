import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAtrr, checkProps } from '../../../Utils';

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component
};

describe(' Headline Component ', () => {

  describe('Checking our prop-types', () => {

    it('Should not throwing a warning', () => {

      const expectedProps = {
        header: 'Test header as a string',
        desc : 'Test desc as a string',
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'Test@email.com',
          age: 23,
          onlineStatus: false
        }]
      };
        const propsError = checkProps(Headline, expectedProps)
        expect(propsError).toBeUndefined();
    });

  });
  
  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });
    
    it('Should render a H1', () => {
      const h1 = findByTestAtrr(wrapper,'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });

  });

  describe('Have no props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should not render', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });

  });

});
import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {

  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'string',
        desc: 'string'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'string',
        desc: 'string'
      }
      wrapper = shallow(<ListItem {...props}/>);
    });

    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1)
    });

    it('Should render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () =>{
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1)
    });

  });

  describe('Should Not Render', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'string'
      }
      wrapper = shallow(<ListItem {...props}/>);
    });

    it ('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });

});
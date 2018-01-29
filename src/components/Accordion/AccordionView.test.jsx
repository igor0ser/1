import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { noop } from 'lodash';
import AccordionView from './AccordionView';

describe('AccordionView', () => {
  it('should render Accordion content when accordion is expanded', () => {
    const comp = shallow((
      <AccordionView expanded toggle={noop}>
        <span id="dummy" />
      </AccordionView>
    ));
    expect(comp.find('#dummy')).toHaveLength(1);
    expect(toJson(comp)).toMatchSnapshot();
  });

  it('should not render Accordion content when accordion is collapsed', () => {
    const comp = shallow((
      <AccordionView toggle={noop}>
        <span id="dummy" />
      </AccordionView>
    ));
    expect(comp.find('#dummy')).toHaveLength(0);
    expect(toJson(comp)).toMatchSnapshot();
  });

  it('should invoke toggle handler on button click', () => {
    const toggle = jest.fn();
    const comp = shallow((
      <AccordionView expanded toggle={toggle}>
        <span id="dummy" />
      </AccordionView>
    ));
    comp.find('button').first().simulate('click');
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});

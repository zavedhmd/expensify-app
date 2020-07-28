import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should match snapshot', () => {
    const wrapper = shallow(<ExpenseSummary expenses={1} totalAmount={5}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should update prop', () => {
    const wrapper = shallow(<ExpenseSummary expenses={23} totalAmount={100}/>);
    expect(wrapper).toMatchSnapshot();
})
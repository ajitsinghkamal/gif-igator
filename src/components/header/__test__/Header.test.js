import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';
describe('Searchbox component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).toMatchSnapshot();
	});
});

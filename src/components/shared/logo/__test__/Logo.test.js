import React from 'react';
import Logo from '../Logo';
import { shallow } from 'enzyme';
describe('Logo component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Logo />);
		expect(wrapper).toMatchSnapshot();
	});
});

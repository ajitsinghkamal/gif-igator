import React from 'react';
import SearchBox from '../SearchBox';
import { shallow } from 'enzyme';
describe('Searchbox component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<SearchBox />);
		expect(wrapper).toMatchSnapshot();
	});
});

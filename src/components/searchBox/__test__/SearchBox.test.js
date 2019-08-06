import React from 'react';
import SearchBox, { SearchInput, Wrap } from '../SearchBox';
import { shallow } from 'enzyme';
describe('Searchbox component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<SearchBox />);
		expect(wrapper).toMatchSnapshot();
	});
	it('it handles input', () => {
		const wrapper = shallow(<SearchBox />);
		wrapper.find(SearchInput).simulate('change', {
			target: { value: 'test' },
		});
		expect(wrapper.find('input').props().value).toEqual('test');
	});
	it('submit doesnt reload', () => {
		const wrapper = shallow(<SearchBox />);
		let prevented = false;
		wrapper.find(Wrap).simulate('submit', {
			preventDefault: () => {
				prevented = true;
			},
		});
		expect(prevented).toBe(true);
	});
});

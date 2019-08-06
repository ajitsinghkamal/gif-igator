import React from 'react';
import NavBtn from '../NavBtn';
import { shallow } from 'enzyme';
import theme from 'style/theme';
describe('Navbtn component', () => {
	it('renders correctly in dark theme', () => {
		const darktheme = Object.assign({}, theme.base, theme.dark);
		const wrapper = shallow(<NavBtn theme={darktheme} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('renders correctly in white theme', () => {
		const lighttheme = Object.assign({}, theme.base, theme.light);
		const wrapper = shallow(<NavBtn theme={lighttheme} />);
		expect(wrapper).toMatchSnapshot();
	});
});

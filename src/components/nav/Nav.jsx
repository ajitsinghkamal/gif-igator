import React from 'react';
import styled from 'styled-components';
import NavBtn from './navBtn/NavBtn';
import { withTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrap = styled.aside`
	flex: 0 0 25%;
	max-width: 260px;
	margin-right: 20px;
	padding-top: 20px;
	@media(max-width: 768px) {
		position: absolute;
		height: 100%;
		top: 0;
		width: 100%;
		padding-top: 78px;
		background: #000;
		transition: transform 0.3s;
		transform: translateX(-100%);
	}
})
`;
const Nav = ({ theme }) => {
	return (
		<Wrap>
			<NavLink to="/trending">
				<NavBtn title="TRENDING" color={theme.purple} />
			</NavLink>
			<NavLink to="/random">
				<NavBtn title="RANDOM" />
			</NavLink>
		</Wrap>
	);
};
Nav.propTypes = {
	theme: PropTypes.object,
};
export default withTheme(Nav);

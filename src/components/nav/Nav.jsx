import React from 'react';
import styled from 'styled-components';
import NavBtn from './navBtn/NavBtn';
import { withTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Wrap = styled.aside`
	display: flex;
	padding-top: 20px;
	.tab {
		flex: 1;
		padding: 10px;
	}
	.tab.active > button {
		border-bottom: 3px solid #fff;
	}
	@media(max-width: 768px) {
	}
})
`;
const Nav = ({ theme }) => {
	return (
		<Wrap>
			<NavLink to="/trending" className="tab">
				<NavBtn title="TRENDING" color={theme.purple} />
			</NavLink>
			<NavLink to="/random" className="tab">
				<NavBtn title="RANDOM" />
			</NavLink>
		</Wrap>
	);
};
Nav.propTypes = {
	theme: PropTypes.object,
};
export default withTheme(Nav);

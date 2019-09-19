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
		padding: 10px;
	}
	.tab.active > button {
		box-shadow: 0 4px 0px 0 ${props => props.theme.primary}
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

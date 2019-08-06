import React from 'react';
import { Container } from 'style/Helpers';
import styled from 'styled-components';
import Logo from 'components/shared/logo/Logo';
import SearchBox from 'components/searchBox/SearchBox';
const Wrap = styled(Container)`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 10;
	display: flex;
	align-items: center;
	padding-top: 10px;
	padding-bottom: 10px;
	justify-content: space-between;
	background: ${props => props.theme.background};
`;

const Header = () => {
	return (
		<Wrap as="header">
			<Logo />
			<SearchBox />
		</Wrap>
	);
};

export default Header;

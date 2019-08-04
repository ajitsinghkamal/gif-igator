import React from 'react';
import { Flex } from 'style/Helpers';
import styled from 'styled-components';
import Logo from 'components/shared/logo/Logo';
const Container = styled(Flex)`
	position: fixed;
	left: 0;
	right: 0;
	justify-content: center;
`;
const Header = () => (
	<Container as="header">
		<Logo />
	</Container>
);
export default Header;

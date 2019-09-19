import React from 'react';
import { EmText } from 'style/Helpers';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Btn = styled.button`
	display: block;
	border: 0;
	height: 60px;
	background: transparent;
	cursor: pointer;
	color: ${props => props.theme.text}
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.5
	}
`;
const NavBtn = ({ title }) => {
	return (
		<Btn>
			<EmText sz={16} wt={800}>
				{title}
			</EmText>
		</Btn>
	);
};
NavBtn.propTypes = {
	theme: PropTypes.object,
	title: PropTypes.string,
};
export default NavBtn;

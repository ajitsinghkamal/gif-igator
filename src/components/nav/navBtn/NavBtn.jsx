import React from 'react';
import { EmText } from 'style/Helpers';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Btn = styled.button`
	display: block;
	border: 0;
	height: 160px;
	width: 100%;
	border-radius: 10px;
	background: ${props => (props.color ? props.color : props.theme.accent)}
	margin-bottom: 15px;
	cursor: pointer;
	&:hover {
		border-right: 2px solid #d0d0d0;
	}
`;
const NavBtn = ({ title }) => {
	return (
		<Btn>
			<EmText sz={25} wt={800} color="#d0d0d0">
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

import React from 'react';
import { EmText } from 'style/Helpers';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Btn = styled.button`
	display: block;
	border: 0;
	height: 160px;
	width: 100%;
	border-radius: 20px;
	background: pink;
	margin: 15px;
`;
const NavBtn = ({ title }) => {
	return (
		<Btn>
			<EmText sz={25} wt={800}>
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

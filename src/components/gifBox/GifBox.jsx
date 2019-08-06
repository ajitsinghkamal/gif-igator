import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Wrap = styled.div`
	flex: 1 0 22%;
	margin: 10px;
	height: 250px;
	min-width: 300px;
	background: ${props => props.theme.dusk} 
	overflow: hidden;
	border-radius: 10px;
	box-shadow: -5px 7px 2px 2px ${props => props.theme.purple};
	@media(max-width: 480px) {
		min-width: 80%;
	}
	&:last-child {
		flex-grow: 0;
	}
`;
const Gif = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
const GifBox = ({ src }) => {
	return (
		<Wrap>
			<Gif src={src && src.images.original.url} />
		</Wrap>
	);
};
GifBox.propTypes = {
	src: PropTypes.object,
};
export default GifBox;

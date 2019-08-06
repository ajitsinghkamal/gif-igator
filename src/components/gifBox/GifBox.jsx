import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Wrap = styled.div`
	flex: 0 0 30%;
	margin: 10px;
	height: 250px;
	width: 300px;
	background: ${props => props.theme.green}
	overflow: hidden;
	border-radius: 10px;
	@media(max-width: 480px) {
		min-width: 80%;
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

import React from 'react';
import GifBox from 'components/gifBox/GifBox';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Wrap = styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 100%;
	position: relative;
	padding: 12px 0;
	flex: 1;
`;
const Empty = styled.p`
	position: absolute;
	top: 20%;
	transform: translateY(-50%);
	font-size: 3rem;
	font-weight: 600;
	width: 100%;
	text-align: center;
`;
const shouldMakeGrid = data => {
	const _gridData = data && data.length ? data : Array(4).fill(null);
	return _gridData.map((item, index) => {
		return (
			<GifBox
				key={item ? item.slug : index}
				src={item && item.images.original.url}
			/>
		);
	});
};
const Grid = ({ list, empty }) => {
	return (
		<Wrap className="grid">
			{empty ? <Empty>Nope!!</Empty> : shouldMakeGrid(list)}
		</Wrap>
	);
};
Grid.propTypes = {
	list: PropTypes.array,
	empty: PropTypes.bool,
};
export default Grid;

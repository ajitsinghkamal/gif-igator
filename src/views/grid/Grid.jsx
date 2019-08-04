import React from 'react';
import Request from 'components/request/Request';
import GifBox from 'components/gifBox/GifBox';
const shouldMakeGrid = ({ data }) => {
	const _gridData = data.length ? data : Array.map(5).fill(null);
	return _gridData.map((item, index) => {
		return <GifBox key={(item && item.slug) || index} data={item} />;
	});
};
const Grid = () => {
	return <Request>{data => shouldMakeGrid(data)}</Request>;
};
export default Grid;

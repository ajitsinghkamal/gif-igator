import React from 'react';
import { TRENDING } from 'immutables/endpoints';
import InfiniteScroller from 'components/InfiniteScroller/InfiniteScroller.jsx';
export default function Trending() {
	return <InfiniteScroller url={TRENDING} />;
}

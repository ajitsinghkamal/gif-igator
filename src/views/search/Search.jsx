import React from 'react';
import { SEARCH } from 'immutables/endpoints';
import InfiniteScroller from 'components/InfiniteScroller/InfiniteScroller.jsx';

export default function Search() {
	return <InfiniteScroller url={SEARCH} />;
}

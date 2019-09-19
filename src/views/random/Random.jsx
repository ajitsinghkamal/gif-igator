import React from 'react';
import { RANDOM } from 'immutables/endpoints';
import InfiniteScroller from 'components/InfiniteScroller/InfiniteScroller.jsx';

export default function Random() {
	return <InfiniteScroller url={RANDOM} />;
}

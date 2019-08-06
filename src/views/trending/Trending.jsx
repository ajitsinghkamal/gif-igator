import React from 'react';
import { TRENDING } from 'immutables/endpoints';
import Grid from 'components/grid/Grid';
import Request from 'components/request/Request';

export default class Trending extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: TRENDING,
		};
	}
	render() {
		return (
			<Request query={this.state.url}>
				{res => {
					this.pagination = res.response.pagination;
					const hasMoreGifs =
						res.response.pagination &&
						res.response.pagination.offset <
							res.response.pagination.total_count;
					const isEmpty =
						res.response.pagination &&
						!res.response.pagination.count;
					return (
						<Grid
							list={res.response.data}
							hasMore={hasMoreGifs}
							empty={isEmpty}
						/>
					);
				}}
			</Request>
		);
	}
}

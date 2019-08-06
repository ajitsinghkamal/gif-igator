import React from 'react';
import { RANDOM } from 'immutables/endpoints';
import Grid from 'components/grid/Grid';
import Request from 'components/request/Request';

export default class Random extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: RANDOM,
			offset: 0,
		};
		this.limit = 15;
		this.pagination = {};
		this.hasMoreGifs = true;
		this.onScroll = this.onScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll() {
		if (
			window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 500 &&
			this.hasMoreGifs
		) {
			this.setState({
				offset: this.pagination.offset + this.limit,
			});
		}
	}
	render() {
		return (
			<Request
				query={this.state.url}
				offset={this.state.offset}
				limit={this.limit}
			>
				{res => {
					this.pagination = res.response.pagination;
					this.hasMoreGifs =
						res.response.pagination &&
						res.response.pagination.offset <
							res.response.pagination.total_count;
					const isEmpty =
						res.response.pagination &&
						!res.response.pagination.count;
					return (
						<Grid
							list={[res.response.data]}
							hasMore={this.hasMoreGifs}
							empty={isEmpty}
						/>
					);
				}}
			</Request>
		);
	}
}

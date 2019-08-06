import React from 'react';
import { TRENDING } from 'immutables/endpoints';
import Grid from 'components/grid/Grid';
import Request from 'components/request/Request';

export default class Trending extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: TRENDING,
			offset: 0,
		};
		this.limit = 15;
		this.pagination = {};
		this.hasMoreGifs = true;
		this.list = [];
		this.onScroll = this.onScroll.bind(this);
		this.loading = true;
	}
	componentDidMount() {
		this.el = document.querySelector('.grid');
		window.addEventListener('scroll', this.onScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, true);
	}

	onScroll() {
		if (
			this.el.getBoundingClientRect().height <=
				window.scrollY + window.innerHeight - 100 &&
			this.hasMoreGifs &&
			!this.loading
		) {
			this.loading = true;
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
					if (
						res.response.data &&
						res.response.data.length &&
						this.loading &&
						this.state.offset === res.response.pagination.offset
					) {
						this.list = [...this.list, ...res.response.data];
						this.loading = false;
					}
					const isEmpty =
						res.response.pagination &&
						!res.response.pagination.count;
					return (
						<Grid
							list={this.list}
							hasMore={this.hasMoreGifs}
							empty={isEmpty}
						/>
					);
				}}
			</Request>
		);
	}
}

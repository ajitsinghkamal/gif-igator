import React from 'react';
import Grid from 'components/grid/Grid';
import Request from 'components/request/Request';
import PropTypes from 'prop-types';

export default class Random extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
		};
		this.list = [];
		this.limit = 15;
		this.pagination = {};
		this.hasMore = true;
		this.onScroll = this.onScroll.bind(this);
	}

	static propTypes = {
		url: PropTypes.string,
	};
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	onScroll() {
		if (
			document.body.offsetHeight - 100 <= window.scrollY &&
			this.hasMore
		) {
			this.setState({
				offset: this.pagination.offset + this.limit,
			});
		}
	}
	render() {
		return (
			<Request
				query={this.props.url}
				offset={this.state.offset}
				limit={this.limit}
			>
				{res => {
					this.pagination = res.response.pagination;
					this.hasMore =
						res.response.pagination &&
						res.response.pagination.offset <
							res.response.pagination.total_count;
					const _isEmpty =
						res.response.pagination &&
						!res.response.pagination.count;
					const _list = Array.isArray(res.response.data)
						? res.response.data
						: [res.response.data];
					return (
						<Grid
							list={res.response.data && _list}
							empty={_isEmpty}
						/>
					);
				}}
			</Request>
		);
	}
}

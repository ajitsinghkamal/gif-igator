import React from 'react';
import PropTypes from 'prop-types';
import req from 'setupAxios';
export default class Request extends React.Component {
	static propTypes = {
		query: PropTypes.string.isRequired,
		offset: PropTypes.number.isRequired,
		limit: PropTypes.number,
		children: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			response: [],
			fetching: false,
		};
		this.shouldFetch = this.shouldFetch.bind(this);
	}

	shouldFetch() {
		req.get(this.props.query, {
			params: {
				api_key: process.env.REACT_APP_API_KEY,
				limit: this.props.limit,
				offset: this.props.offset,
			},
		})
			.then(({ data }) => {
				this.setState({
					response: data,
				});
			})
			.catch(error =>
				this.setState({
					error,
				})
			);
	}

	componentDidMount() {
		this.shouldFetch();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.offset !== this.props.offset) {
			this.shouldFetch();
		}
	}

	render() {
		return this.props.children({
			response: this.state.response,
			error: this.state.error,
		});
	}
}

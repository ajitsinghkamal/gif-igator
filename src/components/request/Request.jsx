import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export default class Request extends React.Component {
	static propTypes = {
		query: PropTypes.object.isRequired,
		children: PropTypes.func.isRequired,
	};

	// set default state for the data to be fetched
	// and possible errors
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			response: [],
			query: this.props.query,
		};
	}

	componentDidMount() {
		axios
			.get()
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

	render() {
		return this.props.children({
			response: this.state.response,
			error: this.state.error,
		});
	}
}

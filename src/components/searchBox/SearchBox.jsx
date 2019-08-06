import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const Wrap = styled.form`
	max-width: 80%;
	flex: 1 0;
	border: 0;
	position: relative;
	padding: 0 10px;
`;
const SearchInput = styled.input`
	background: transparent;
	color: #ffffff;
	padding: 6px 12px;
	height: 3rem;
	width: 100%;
	font-size: 1.2rem;
	display: block;
	border-radius: 10px;
	transition: box-shadow 0.3s;
	box-shadow: 0 0 0px 2px ${props => props.theme.purple};
	&:focus {
		box-shadow: 0 0 0px 4px ${props => props.theme.purple};
	}
`;
const SearchAction = styled.button`
	position: absolute;
	right: 0;
	background: ${props => props.theme.accent};
	top: 0;
	height: 100%;
	width: 50px;
	display: flex;
	font-size: 1.2rem;
	font-weight: 600;
	cursor: pointer;
	align-items: center;
	visibility: ${props => (props.visible ? 'visible' : 'hidden')};
	color: ${props => props.theme.text};
	justify-content: center;
`;
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchKey: '',
		};
		this.shouldSearch = this.shouldSearch.bind(this);
	}
	static propTypes = {
		history: PropTypes.object,
	};
	setSearchKey(value) {
		this.setState({
			searchKey: value,
		});
	}

	shouldSearch(e) {
		e.preventDefault();
		this.props.history.push({
			pathname: '/search',
			search: `?q=${this.state.searchKey}`,
		});
	}
	render() {
		return (
			<Wrap onSubmit={this.shouldSearch}>
				<SearchInput
					placeholder="Search"
					value={this.state.searchKey}
					onChange={event => this.setSearchKey(event.target.value)}
				/>
				<SearchAction visible={!!this.state.searchKey} type="Submit">
					→
				</SearchAction>
			</Wrap>
		);
	}
}
export default withRouter(Search);

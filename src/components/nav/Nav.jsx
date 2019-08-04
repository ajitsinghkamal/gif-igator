import React from 'react';
import styled from 'styled-components';
import NavBtn from './navBtn/NavBtn';
import Shell from 'layout/shell/Shell';
import Grid from 'views/grid/Grid';

import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';
const Wrap = styled.aside`
	flex: 0 0 30%;
	max-width: 30%;
	padding: 20px;
})
`;
const Nav = () => {
	return (
		<Router>
			<Wrap>
				<NavLink to="/random">
					<NavBtn title="RANDOM" />
				</NavLink>
				<NavLink to="/trending">
					<NavBtn title="TRENDING" />
				</NavLink>
			</Wrap>
			<Route path="/" component={Shell}>
				<Redirect to="/trending" />
				<Route path="/random" component={Grid} />
				<Route path="/search" component={Grid} />
				<Route path="/trending" component={Grid} />
			</Route>
		</Router>
	);
};

export default Nav;

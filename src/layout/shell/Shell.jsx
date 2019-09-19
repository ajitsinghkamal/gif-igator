import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { DEFAULT_THEME, SECONDARY_THEME } from 'style/theme';
import Header from 'components/header/Header';
import { Container } from 'style/Helpers';
import Nav from 'components/nav/Nav';
import Random from 'views/random/Random';
import Trending from 'views/trending/Trending';
import Search from 'views/search/Search';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
const Backdrop = styled.div`
	background: ${props => props.theme.background};
	color: ${props => props.theme.text};
	min-height: 100vh;
	width: 100%;
	overflow: auto;
})
`;

const Base = styled(Container)`
	height: 100%;
	position: relative;
	padding-top: 68px;
`;

const Floating = styled.div`
	position: fixed;
	bottom: 20px;
	height: 50px;
	width: 90px;
	right: 10px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #fff;
	font-size: 12px;
	font-weight: 600;
	background: ${props => props.theme.purple};
`;
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTheme: this.defaultTheme,
			theme: Object.assign({}, theme.base, theme.light),
		};
		this.updateTheme = this.updateTheme.bind(this);
	}
	updateTheme() {
		const newTheme =
			this.state.activeTheme === DEFAULT_THEME
				? SECONDARY_THEME
				: DEFAULT_THEME;
		this.setState({
			activeTheme: newTheme,
			theme: Object.assign({}, theme.base, theme[newTheme]),
		});
	}
	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<Backdrop>
					<Router>
						<Header />
						<Base>
							<Nav />
							<Route path="/" render={() => <main />}>
								<Redirect to="/trending" />
								<Route path="/random" component={Random} />
								<Route path="/search" component={Search} />
								<Route path="/trending" component={Trending} />
							</Route>
							<Floating onClick={() => this.updateTheme()}>
								{this.state.activeTheme === SECONDARY_THEME
									? 'Dark Mode'
									: 'Light Mode'}
							</Floating>
						</Base>
					</Router>
				</Backdrop>
			</ThemeProvider>
		);
	}
}

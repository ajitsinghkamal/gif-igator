import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { DEFAULT_THEME } from 'style/theme';
import Header from 'components/header/Header';
import { Flex } from 'style/Helpers';
import Nav from 'components/nav/Nav';
const Backdrop = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	height: 100vh;
	width: 100%;
})
`;

const Container = styled(Flex)`
	height: 100%;
	position: relative;
	align-items: stretch;
	padding-top: 68px;
	margin: 0 auto;
	max-width: 1410px;
`;
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTheme: this.defaultTheme,
			theme: Object.assign({}, theme.base, theme[DEFAULT_THEME])
		};
		this.updateTheme = this.updateTheme.bind(this);
	}
	updateTheme(newTheme) {
		this.setState({
			activeTheme: newTheme
		});
	}
	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<Backdrop>
					<Header />
					<Container>
						<Nav />
						<main />
					</Container>
				</Backdrop>
			</ThemeProvider>
		);
	}
}

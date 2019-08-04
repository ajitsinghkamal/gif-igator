import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { DEFAULT_THEME } from 'style/theme';
import Header from 'components/header/Header';
import NavBtn from 'components/navBtn/NavBtn';
import { Flex } from 'style/Helpers';
const Backdrop = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	height: 100vh;
	width: 100%;
})
`;
const SideNav = styled.aside`
	flex: 0 0 30%;
	max-width: 30%;
	padding: 20px;
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
						<SideNav>
							<NavBtn title="RANDOM" />
							<NavBtn title="TRENDING" />
						</SideNav>
						<main />
					</Container>
				</Backdrop>
			</ThemeProvider>
		);
	}
}

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme, { DEFAULT_THEME } from 'style/theme';
import Header from 'components/header/Header';
const Backdrop = styled.div`
	background: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text};
	min-height: 100vh;
	width: 100%;
})
`;
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTheme: this.defaultTheme,
			theme: Object.assign({}, theme, theme[DEFAULT_THEME])
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
				</Backdrop>
			</ThemeProvider>
		);
	}
}

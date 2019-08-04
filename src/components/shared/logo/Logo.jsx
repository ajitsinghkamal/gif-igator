import React from 'react';
import { EmText, Text, Flex } from 'style/Helpers';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
const Logo = ({ theme }) => {
	return (
		<Flex align="flex-end" style={{ padding: '10px' }}>
			<EmText sz={32} wt={800} color={theme.primary}>
				GIF
			</EmText>
			<Text sz={21}>igator</Text>
		</Flex>
	);
};
Logo.propTypes = {
	theme: PropTypes.object,
};
export default withTheme(Logo);

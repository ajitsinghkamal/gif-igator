import styled from 'styled-components';
import { FONT_BASE } from './theme';
export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.dir || 'row'};
	flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
	justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
	align-items: ${props => (props.align ? props.align : 'center')};
`;

const remify = size => {
	let _size = typeof size === 'string' ? +size.replace(/px/, '') : size;
	return `${_size / FONT_BASE}rem`;
};
export const Text = styled.p`
	font-size: ${props => (props.sz ? remify(props.sz) : '1rem')};
	font-weight: ${props => (props.wt ? props.wt : '400')};
	color: ${props => (props.color ? props.color : props.theme.text)};
	line-height: ${props => (props.lh ? props.lh : '1.5')};
`;
export const EmText = styled(Text)`
	font-family: 'Poppins';
	font-weight: ${props => (props.wt ? props.wt : '600')};
`;

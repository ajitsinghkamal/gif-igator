import React from 'layout/shell/__test__/node_modules/react';
import ReactDOM from 'layout/shell/__test__/node_modules/react-dom';
import Shell from './Shell';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Shell />, div);
	ReactDOM.unmountComponentAtNode(div);
});

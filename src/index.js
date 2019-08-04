import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shell from './Shell';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Shell />, document.getElementById('root'));

serviceWorker.unregister();

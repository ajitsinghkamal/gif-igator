import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Shell from 'layout/shell/Shell';
import './setupFonts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Shell />, document.getElementById('root'));

serviceWorker.unregister();

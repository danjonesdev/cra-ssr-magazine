/* eslint-disable no-console, no-param-reassign, no-use-before-define */
// In production, we register a service worker to serve assets from local cache.

import React from 'react';
import ReactDOM from 'react-dom';
import './app/app.scss';
import App from './index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();

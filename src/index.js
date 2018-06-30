import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './main.css';
import './simplegrid.css';

render(<App/>,document.getElementById('root'));
registerServiceWorker();
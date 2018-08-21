import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel) 

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, document.getElementById('root'));
registerServiceWorker();

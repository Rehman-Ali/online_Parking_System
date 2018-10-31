import React from 'react';
import ReactDOM from 'react-dom';
import './components/assests/index.css';
import App from './components/App';
import store from './store/store/store';
import {Provider} from 'react-redux';
//import registerServiceWorker from './components/assests/registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();

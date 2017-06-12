import React from 'react';
import ReactDOM from 'react-dom';
import EthosChallengeApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<EthosChallengeApp />, document.getElementById('root'));
registerServiceWorker();

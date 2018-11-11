import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import registerServiceWorker from './net/registerServiceWorker';
import Store from './store';

const APP = <Provider store={Store}><App /></Provider>

ReactDOM.render(
  APP,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

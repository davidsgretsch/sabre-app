import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const ProviderApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ProviderApp, document.getElementById('root'));
registerServiceWorker();

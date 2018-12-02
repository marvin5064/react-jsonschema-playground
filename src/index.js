import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import tmpDataStore from './stores/tmpDataStore';
import { createStore } from 'redux';

const store = createStore(tmpDataStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
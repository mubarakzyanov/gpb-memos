import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './containers/index';
import root from './reducers/root';

const store = createStore(
  root,
);

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import { Layout } from './Layout';

ReactDOM.render(
  <Provider store={store}>
    <Layout>
    <App />
    </Layout>
  </Provider>,
  document.getElementById('root')
);

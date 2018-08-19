import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App/App';
import reducer from './redux/modules';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-mount'),
);

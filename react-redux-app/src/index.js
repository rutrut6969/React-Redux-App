import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, applyMiddleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>

  document.getElementById('root')
);


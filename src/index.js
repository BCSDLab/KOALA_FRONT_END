import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import GlobalFonts from './font/fonts';
import rootReducer, { rootSaga } from './store';
import logger from 'redux-logger';
import './index.css';
import dotenv from 'dotenv';
dotenv.config();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalFonts />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

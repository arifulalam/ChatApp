/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import firebaseConfig from './database/firebaseConfig.js';
import store from './features/store.jsx'

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)

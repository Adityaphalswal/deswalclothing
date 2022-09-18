import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import './index.css';
import App from './App';

import {store,persistor} from './redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store} >
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>    
    </Router>
  </Provider>
);


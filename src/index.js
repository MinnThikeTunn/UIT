import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Faq from './Faq/Faq.js';
import reportWebVitals from './reportWebVitals';

import { HashRouter as Router } from 'react-router-dom';
import Navigator from './navigator.js';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import Admission from './Admission/Admission.jsx';
import Faculty from './Faculty/Faculty.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Faculty />

    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

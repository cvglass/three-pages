import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './components/Root'
import './index.css';
// import store from './store';

ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'))

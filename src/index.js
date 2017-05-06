import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';

import Root from './components/Root'
import About from './components/About'
import './index.css';
import store from './store';


render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Route path="/" component={Root}>
        <Route path="/about" component={About} />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
// import App from './App';
import Root from './components/Root'
import './index.css';
// import store from './store';


render(
  // <Provider store={store}>
  <Provider>
    <BrowserRouter history={browserHistory}>
      <Route path="/" component={Root}>
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

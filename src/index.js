import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter } from 'react-router-redux';

import Root from './components/Root'
import './index.css';
import store from './store';

// const history = createHistory()

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Root />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

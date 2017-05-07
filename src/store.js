import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);


export default createStore(combineReducers({rootReducer, router: routerReducer}), applyMiddleware(thunkMiddleware, createLogger, middleware))

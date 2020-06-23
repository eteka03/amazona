import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunkMiddleware from 'redux-thunk'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import { getProducts,detailsProduct,cartReducer,userSigninReducer,userRegisterReducer } from './redux/reducers';
import Cookie from 'js-cookie'


const cartItems = Cookie.getJSON('cartItems') || []
const userInfo = Cookie.getJSON('userInfo') || null
const inital = {cartReducer:{cartItems},userSigninReducer:{userInfo}}
const logger = createLogger()
const rootReducers = combineReducers({getProducts,detailsProduct,cartReducer,userSigninReducer,userRegisterReducer})
const store = createStore(rootReducers,inital,applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
        <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

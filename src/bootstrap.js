import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/main.scss';

import history from './history';

import Layout from './components/layout';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Account from './components/account/account';
import Shop from './components/shop/shop';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
            <Switch>
              <Route path='/' exact component={Signin}/>
              <Route path='/signin' exact component={Signin}/>
              <Route path='/signup' exact component={Signup}/>
              
              <Route path='/account' exact component={Account}/>

              <Route path='/shop' exact component={Shop}/>
            </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}
document.addEventListener('DOMContentLoaded', main);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/bulma.sass';
import createBrowserHistory from 'history/createBrowserHistory';

import { Route, Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TankList } from './components/TankList';
import { Service } from './components/Service';

const history = createBrowserHistory();



ReactDOM.render((
  <Router history={history}>
    <Layout>
      <Route exact={true} path="/" component={TankList} />
      <Route exact={true} path="/service" component={Service} />
    </Layout>
  </Router>
), document.getElementById('root'));

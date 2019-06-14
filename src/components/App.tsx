import * as React from 'react';
import { History } from 'history';

import { Route, Router } from 'react-router-dom';
import { Layout } from './Layout';
import { TankList } from './TankList';
import { Service } from './Service';

interface IAppProps {
  history: History<any>;
}

export class App extends React.Component<IAppProps, any> {
  public render() {
    return (
      <Router history={this.props.history}>
        <Layout>
          <Route exact={true} path="/" component={TankList} />
          <Route exact={true} path="/service" component={Service} />
        </Layout>
      </Router>
    );
  }
}
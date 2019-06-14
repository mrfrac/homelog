import * as React from 'react';
import { MenuWithRouter } from './MenuWithRouter';

export class Layout extends React.Component {
  public render() {
    return <div>
      <MenuWithRouter />
      {this.props.children}
    </div>;
  }
}

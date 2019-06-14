import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom'


export class Menu extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <nav className="level">
        <p className="level-item has-text-centered">
          <Link to="/" className="link is-info">Септик</Link>
        </p>
        <p className="level-item has-text-centered">
          <Link to="/service" className="link is-info">Обслуживание</Link>
        </p>
      </nav>
    );
  }
}

const MenuWithRouter = withRouter(Menu);
export { MenuWithRouter };

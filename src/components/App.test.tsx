import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import { App } from './App';

const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={history}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
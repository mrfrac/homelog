import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma.sass';
import { createBrowserHistory } from 'history';

import './index.css';
import { App } from './components/App';

const history = createBrowserHistory();

ReactDOM.render((
  <App history={history}/>
), document.getElementById('root'));

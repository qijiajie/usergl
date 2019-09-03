import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RouterView from './route/RouterView';
import router from './route/router';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import 'antd/dist/antd.css';

import {Provider} from 'mobx-react';
import store from './store'

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter>
      <RouterView routes={router.routes}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

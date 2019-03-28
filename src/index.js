import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducers from './reducers';
import Landing from './components/Landing';
import Gameroom from './containers/Gameroom';
import Gameover from './components/gameover';
import LobbyLanding from './components/LobbyLanding';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/gameroom" component={Gameroom} />
          <Route path="/gameover" component={Gameover} />
          <Route path="/lobby" component={LobbyLanding} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

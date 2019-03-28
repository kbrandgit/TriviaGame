import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reducers from "./reducers";
import Landing from './components/Landing';
import Gameroom from './containers/Gameroom';
import Gameover from "./components/gameover";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Landing" component={Landing} />
          <Route path="/Gameroom" component={Gameroom} />
          <Route path="/Gameover" component={Gameover} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

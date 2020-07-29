import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store/index";

import HomePage from "./views/HomePage.jsx";
import NoMatch from "./views/NoMatch.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
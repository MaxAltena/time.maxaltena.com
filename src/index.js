import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/canada"
        render={props => (
          <App
            {...props}
            name="Canada Trip"
            deadline="22 February 2019 12:00:00 GMT+1"
          />
        )}
      />
      <Route
        path="/"
        render={props => (
          <App
            {...props}
            name="My countdown"
            deadline="21 February 2019 12:00:00 GMT+1"
          />
        )}
      />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

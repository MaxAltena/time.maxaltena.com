import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/canada"
        render={() => (
          <Redirect to="/Canada-Trip/22-February-2019-12:00:00-GMT+1/" />
        )}
      />
      <Route
        path="/:name/:deadline/"
        render={props => (
          <App
            {...props}
            name={props.match.params.name}
            deadline={props.match.params.deadline}
          />
        )}
      />
      <Route
        path="/"
        render={() => (
          <Redirect to="/New-Years-Eve/1-January-2019-00:00:00-GMT+1/" />
        )}
      />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();

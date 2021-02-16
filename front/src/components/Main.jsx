import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import AutosContainer from "../containers/AutosContainer";
import SingleUserContainer from "../containers/SingleUserContainer";
import SingleAutoContainer from "../containers/SingleAutoContainer";


const Main = () => (
  <div>
    <Switch>
      <Route exact path="/users" component={UsersContainer} />
      <Route exact path="/autos" component={AutosContainer} />

      <Route
        path="/users/:id"
        render={({ match }) => <SingleUserContainer userId={match.params.id} />}
      />
      <Route
        path="/autos/:id"
        render={({ match }) => <SingleAutoContainer autoId={match.params.id} />}
      />
      <Redirect from="/" to="/users" />
    </Switch>
  </div>
);

export default Main;

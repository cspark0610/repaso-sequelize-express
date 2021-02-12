import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import SingleUserContainer from "../containers/SingleUserContainer";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/users" component={UsersContainer} />
      <Route
        path="/users/:id"
        render={({ match }) => <SingleUserContainer userId={match.params.id} />}
      />
      <Redirect from="/" to="/users" />
    </Switch>
  </div>
);

export default Main;

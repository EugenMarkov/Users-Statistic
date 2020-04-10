import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage";
import UsersStatisticPage from "../pages/UsersStatisticPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import Preloader from "../components/Preloader";


const Routes = ({ preloader }) => {

  useEffect(() => {
  }, []);

  return preloader ? (
    <Preloader />
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersStatisticPage} />
      <Route path="/users/:id" component={UserDetailsPage} />
      <Redirect to="/" />
    </Switch>
  );
};


export default Routes;

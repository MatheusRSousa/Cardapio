import React from "react";
import { Route, Redirect } from "react-router-dom";

import SessionService from "../../services/SessionService";

const PrivateRoute = ({ children, ...rest }) => (
  <Route {...rest}>
    {SessionService.isLoggedIn() ? children : <Redirect to="/login" />}
  </Route>
);

export default PrivateRoute;

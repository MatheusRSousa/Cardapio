import React from "react";
import Categories from "./pages/categories";
import Home from "./pages/home";
import Products from "./pages/products";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { theme } from "./config/theme";
import { ThemeProvider } from "@material-ui/core";
import Session from "./pages/session";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./pages/logout";
import SessionService from "./services/SessionService";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Redirect
            exact
            from="/"
            to={SessionService.getToken() ? "home" : "/login"}
          />
          <Route path="/login" exact>
            <Session />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <PrivateRoute path="/home" exact>
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/categories">
            <Categories />
          </PrivateRoute>
          <PrivateRoute path="/products">
            <Products />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

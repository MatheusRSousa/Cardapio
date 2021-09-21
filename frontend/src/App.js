import React from "react";
import Categories from "./pages/categories";
import Home from "./pages/home";
import Products from "./pages/products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from "./config/theme";
import { ThemeProvider } from "@material-ui/core";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

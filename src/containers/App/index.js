/* eslint-disable */
import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { AppContainer } from "./style";

import { theme } from "./theme";
import { routes } from "./routes";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Banner from "../../components/Banner";
import RistekDivisionSection from "../../components/RistekDivisionSection";

export class App extends React.Component {
  render() {
    const pages = routes.map((route, i) => (
      <Route
        component={route.component}
        exact={route.exact}
        path={route.path}
        key={i}
      />
    ));
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Switch>{pages}</Switch>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(App)
);

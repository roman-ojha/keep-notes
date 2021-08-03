import React from "react";
import NavBar from "./React-components/NavBar";
import MainPage from "./React-components/MainPage";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import RegisterPage from "./React-components/RegisterPage";
import SignInPage from "./React-components/SignInPage";

const LoggedInPage = () => {
  return (
    <>
      <NavBar />
      <MainPage />
    </>
  );
};

const RoutingSignInSignOutPage = () => {
  return (
    <>
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/u" component={LoggedInPage} />
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutingSignInSignOutPage />
      </BrowserRouter>
    </>
  );
};

export default App;

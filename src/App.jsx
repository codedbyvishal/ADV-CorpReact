import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ServicePolicies from "./pages/ServicePolicies";
import NotFound from "./pages/NotFound";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import Counter from "./pages/Counter";

import Header, { SeesionHeader } from "./components/Header";
import Footer, { SeesionFooter } from "./components/Footer";
import Spinner from "./components/Spinner";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const SessionLayout = ({ children }) => (
  <div className="d-flex flex-column h-100 pl-2">
    <SeesionHeader />
    {children}
    <SeesionFooter />
  </div>
);

class App extends Component {
  render() {
    const { spinner } = this.props;

    return (
      <>
        <Switch>
          <Route exact path={["/login", "/register", "/forgotPassword"]}>
            <SessionLayout>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Registration />
                </Route>
                <Route path="/forgotPassword">
                  <ForgotPassword />
                </Route>
              </Switch>
            </SessionLayout>
          </Route>
          <Route
            exact
            path={["/aboutUs", "/contactUs", "/servicePolicies", "/"]}
          >
            <MainLayout>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/aboutUs">
                  <AboutUs />
                </Route>
                <Route path="/contactUs">
                  <ContactUs />
                </Route>
                <Route path="/servicePolicies">
                  <ServicePolicies />
                </Route>
              </Switch>
            </MainLayout>
          </Route>
          <Route path={["/counter"]}>
            <Counter />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
        {spinner && <Spinner />}
      </>
    );
  }
}

export default connect((state) => ({ spinner: state.spinner }))(App);

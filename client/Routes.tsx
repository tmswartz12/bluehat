import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "./store";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
/* Import Files */
import Cookies from "js-cookie";
import Navigation from "./Navigation";
import TestFileUpload from "./TestFileUpload";
import Register from "./components/Register";
import Onboarding from "./components/Onboarding";
import history from "./history";

export default function Routes() {
  const user = useStoreState((state) => state.user.data);
  const getUser = useStoreActions((actions) => actions.user.getUser);
  const hasCookie = Boolean(Cookies.get("blueHatAuth"));

  useEffect(() => {
    getUser();
  }, []);

  const showOnboarding = () => {
    if (user && user.onboardingStatus !== "complete") {
      console.log("running");
      return true;
    } else {
      return false;
    }
  };

  return (
    <Router>
      <Navigation />
      <Switch>
        {!hasCookie && <Route exact path="/" component={() => <Register />} />}
        <Route exact path="/onboarding" component={() => <Onboarding />} />
        <Route exact path="/upload" component={() => <TestFileUpload />} />
        <Route exact path="/" component={() => <div>Dashboard</div>} />

        {/* {isAdmin && [
          <Route path="/login">
            <Redirect to="/dashboard" />
          </Route>
        ]} */}

        <Route path="/">
          {!user && <Redirect to="/login" />}
          {showOnboarding() && <Redirect to="/onboarding" />}
        </Route>
      </Switch>
    </Router>
  );
}

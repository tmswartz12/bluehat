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

export default function Routes() {
  const user = useStoreState((state) => state.user.data);
  const getUser = useStoreActions((actions) => actions.user.getUser);

  useEffect(() => {
    getUser();
  }, []);

  const hasCookie = Boolean(Cookies.get(""));

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={() => <div>Hey there</div>} />
        {/* {isAdmin && [
          <Route path="/login">
            <Redirect to="/dashboard" />
          </Route>
        ]} */}
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

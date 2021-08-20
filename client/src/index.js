import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import RegisterPage from "./Components/Signup";
import DetailsPage from "./Components/Details";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import UnAuthenticatedRoute from "./Components/UnAuthenticatedRoute/UnAuthenticatedRoute";
import NotFound from "./Components/Not-found";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/signup" render={(props) => <RegisterPage {...props} />} />
      <UnAuthenticatedRoute
        path="/login"
        render={(props) => <Login {...props} />}
      />

      <ProtectedRoute
        path="/profile"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route path="/details" render={(props) => <DetailsPage {...props} />} />
      <UnAuthenticatedRoute
        path="/signup"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect exact from="/" to="/signup" />
      <Redirect to="/not-found" render={(props) => <NotFound {...props} />} />
    </Switch>

    <ToastContainer />
  </BrowserRouter>,
  document.getElementById("root")
);

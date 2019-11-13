import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginFormPage from "./pages/LoginFormPage";
import UsersListPage from "./pages/UsersListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/userdetailspage/:user">
          <UserDetailsPage />
        </Route>
        <Route exact path="/userslistpage">
          <UsersListPage />
        </Route>
        <Route exact path="/">
          <LoginFormPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

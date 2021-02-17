/* FUTURE PLANS
  1) Add label search for all repos of a user*/

// Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/layouts/Navbar";
import User from "./components/users/User";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

// States (Context API)
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";

// Main CSS
import "./App.css";

const App = ():JSX.Element => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

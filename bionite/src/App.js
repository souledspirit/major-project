import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import './App.css';
// import LoginForm from './LoginForm';
// import BackgroundImage from './BackgroundImage';
// import RegistrationForm from './RegistrationForm'; // Create this component

function App() {
  return (
    <Router>
      <div className="authentication-container">
        <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/register" exact component={RegistrationForm} />
          <Route path="/" exact component={BackgroundImage} />
          <Redirect to="/login" />{" "}
          {/* Redirect to the login page if no route matches */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

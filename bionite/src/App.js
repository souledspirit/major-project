import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, // Import 'Routes' instead of 'Switch'
  Redirect,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import DashBoard from "./pages/DashBoard";
import HomePage from "./pages/HomePage";
// import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {" "}
          {/* Use 'Routes' here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* Redirect is handled differently in v6 */}
          {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

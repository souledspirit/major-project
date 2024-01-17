import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, // Import 'Routes' instead of 'Switch'
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="authentication-container">
        <Routes>
          {" "}
          {/* Use 'Routes' here */}
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/register" element={} /> */}
          {/* Redirect is handled differently in v6 */}
          {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

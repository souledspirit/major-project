import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "./app.css";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";
import ForgotPassword from "./pages/ForgotPassword";

const Layout = lazy(() => import("./containers/Layout"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
// const DashBoard = lazy(() => import("./pages/DashBoard"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

// Initializing different libraries
initializeApp();

// Check for login and initialize axios
const token = checkAuth();

function App() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/* Add a fallback for loading state */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/dashboard" element={<DashBoard />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/app/*" element={<Layout />} />

          <Route
            path="*"
            element={
              <Navigate to={token ? "/app/welcome" : "/login"} replace />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

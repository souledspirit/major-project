import React, { lazy, Suspense, useEffect } from "react";
import "./app.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { themeChange } from "theme-change";
import checkAuth from "./app/auth";
import initializeApp from "./app/init";

// Lazy loading the components
const Layout = lazy(() => import("./components/containers/Layout"));
const Login = lazy(() => import("./pages/LoginPage"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Register = lazy(() => import("./pages/RegisterPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

// Initializing different libraries and checking for authentication
initializeApp();
const token = checkAuth();

function App() {
  useEffect(() => {
    themeChange(false); // Initializing themeChange
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/* Fallback for lazy loading */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes inside Layout */}
          <Route
            path="/app/*"
            element={token ? <Layout /> : <Navigate to="/login" replace />}
          />

          {/* Redirect based on authentication */}
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

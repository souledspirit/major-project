import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { themeChange } from "theme-change";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashBoard = lazy(() => import("./pages/DashBoard"));
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

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
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.118.210:3000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/dashboard");
      // Handle login success (e.g., store the received token, navigate to another page, etc.)
    } catch (error) {
      console.error("Login error", error.response.data);
      setLoginError("Login not successful");
      alert("no you have entered wrong password");
      // Handle login failure
    }
  };

  return (
    <>
      <Navbar />
    </>
  );
}

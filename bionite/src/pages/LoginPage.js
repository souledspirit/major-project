import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuthInfo } from "../features/auth/authSlice";
import ErrorText from "../components/Typography/ErrorText";
import InputTextone from "../components/Input/InputTextone";
import axios from "axios";
import { useDispatch } from "react-redux";
// Other imports...

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [tempToken, setTempToken] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (loginObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
        {
          email: loginObj.emailId,
          password: loginObj.password,
        }
      );

      if (response.data.tempToken) {
        setTempToken(response.data.tempToken);
        setOtpModalOpen(true);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error logging in");
    }

    setLoading(false);
  };

  const verifyOtp = async () => {
    // Real testing logic
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/login-verify`,
        {
          email: loginObj.emailId,
          otp,
        },
        {
          headers: {
            Authorization: `Bearer ${tempToken}`,
          },
        }
      );

      // Save the final token after OTP verification
      console.log("Token:", response.data.token);
      console.log("User object received:", response.data.user);
      console.dir(response.data.user);

      dispatch(
        setAuthInfo({
          token: response.data.token,
          user: response.data.user, // Dispatching the entire user object
        })
      );

      localStorage.setItem("token", response.data.token);

      if (response.data.user.role === "student") {
        navigate("/app/dashboard");
      } else {
        navigate("/app/staff-dashboard");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error verifying OTP");
    }
  };

  const updateFormValue = ({ target: { name, value } }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [name]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center dark:bg-gray-900">
      <div className="card w-full max-w-md shadow-2xl dark:bg-gray-800">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-4 text-center dark:text-primary">
            Login
          </h2>
          <form onSubmit={submitForm}>
            <InputTextone
              type="email"
              name="emailId"
              defaultValue={loginObj.emailId}
              labelTitle="Email Id"
              updateFormValue={updateFormValue}
              inputStyle="input input-bordered w-full dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            <InputTextone
              type="password"
              name="password"
              defaultValue={loginObj.password}
              labelTitle="Password"
              updateFormValue={updateFormValue}
              inputStyle="input input-bordered w-full dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700"
            />
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-primary hover:text-primary-focus transition duration-200 text-sm"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn mt-4 w-full bg-primary hover:bg-primary-focus text-white"
            >
              Login
            </button>
            <div className="text-center mt-4 dark:text-gray-300">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="text-primary hover:text-primary-focus transition duration-200"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* OTP Modal */}
      {otpModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
            <h3 className="text-xl mb-4 dark:text-white">Enter OTP</h3>
            <input
              type="text"
              className="input input-bordered w-full dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
            <button
              className="btn mt-4 w-full bg-primary hover:bg-primary-focus text-white"
              onClick={verifyOtp}
            >
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;

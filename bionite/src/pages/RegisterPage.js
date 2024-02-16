import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "../components/LandingIntro";
import ErrorText from "../components/Typography/ErrorText";
import InputText from "../components/Input/InputText";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const INITIAL_REGISTER_OBJ = {
    name: "",
    password: "",
    emailId: "",
    role: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!registerObj.name.trim()) return setErrorMessage("Name is required!");
    if (!registerObj.emailId.trim())
      return setErrorMessage("Email Id is required!");
    if (!registerObj.password.trim())
      return setErrorMessage("Password is required!");
    if (!registerObj.role.trim()) return setErrorMessage("Role is required!");

    setLoading(true);
    try {
      const payload = {
        username: registerObj.name, // Adjust to 'username' to match backend expectation
        email: registerObj.emailId, // Adjust to 'email' to match backend expectation
        password: registerObj.password,
        role: registerObj.role,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/register`,
        payload
      );
      setLoading(false);
      if (response.data.success) {
        setShowOtpModal(true);
        setShowSuccessAlert(true);
        console.log("Registration Response:", response.data);
      } else {
        setErrorMessage(response.data.message || "Registration failed");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = async () => {
    console.log("Verifying OTP:", otp);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/verify-otp`,
        {
          email: registerObj.emailId,
          otp: otp,
        }
      );
      if (response.data.message === "Account verified successfully.") {
        setOtpVerified(true);
        setShowOtpModal(false);
        setTimeout(() => {
          setOtpVerified(false);
          navigate("/login");
        }, 2000);
      } else {
        setErrorMessage("OTP verification failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred during OTP verification."
      );
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen flex items-center dark:bg-gray-900">
      <div className="card mx-auto w-full max-w-5xl shadow-xl dark:bg-gray-800 text-white">
        {/* Conditionally render the success alert */}
        {showSuccessAlert && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Registration successful! Redirecting to login...</span>
          </div>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 dark:bg-gray-700 rounded-xl">
          <div className="rounded-l-xl dark:bg-gray-800">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-3xl font-semibold mb-2 text-center text-primary">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  defaultValue={registerObj.name}
                  updateType="name"
                  containerStyle="mt-4"
                  labelTitle="Name"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.emailId}
                  updateType="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.password}
                  type="password"
                  updateType="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />

                {/* Role selection dropdown */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Role</span>{" "}
                    {/* Adjust label color for dark mode */}
                  </label>
                  <select
                    className="select select-bordered select-primary w-full"
                    value={registerObj.role}
                    onChange={(e) =>
                      updateFormValue({
                        updateType: "role",
                        value: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Role</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>

              {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
              <button
                type="submit"
                disabled={loading}
                className={`btn mt-2 w-full ${
                  loading ? "loading" : ""
                } bg-primary hover:bg-primary-focus text-white`}
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <div className="text-center mt-4 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-primary-focus hover:underline transition duration-200"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Enter OTP</h3>
              <p className="py-4">
                Please enter the 6-digit OTP sent to your email.
              </p>
              <input
                type="text"
                placeholder="6-digit OTP"
                className="input input-bordered input-primary w-full max-w-xs"
                maxLength="6"
                value={otp}
                onChange={handleOtpChange}
              />
              <div className="modal-action">
                <a href="#" className="btn" onClick={verifyOtp}>
                  Verify
                </a>
              </div>
            </div>
          </div>
        )}
        {otpVerified && (
          <div className="alert alert-success shadow-lg">
            <div>
              <span>OTP verified successfully! Redirecting to login...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;

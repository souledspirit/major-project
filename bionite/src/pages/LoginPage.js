import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorText from "../components/Typography/ErrorText";
import InputTextone from "../components/Input/InputTextone";
import axios from "axios";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

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

      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("token", "DumyTokenHere");
      window.location.href = "/app/welcome";
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

// import { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import LandingIntro from "../components/LandingIntro";
// import ErrorText from "../components/Typography/ErrorText";
// import InputText from "../components/Input/InputText";

// function LoginPage() {
//   const INITIAL_LOGIN_OBJ = {
//     password: "",
//     emailId: "",
//   };

//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

//   const submitForm = (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (loginObj.emailId.trim() === "")
//       return setErrorMessage("Email Id is required! (use any value)");
//     if (loginObj.password.trim() === "")
//       return setErrorMessage("Password is required! (use any value)");
//     else {
//       setLoading(true);
//       // Call API to check user credentials and save token in localstorage
//       localStorage.setItem("token", "DumyTokenHere");
//       setLoading(false);
//       window.location.href = "/app/welcome";
//     }
//   };

//   const updateFormValue = ({ updateType, value }) => {
//     setErrorMessage("");
//     setLoginObj({ ...loginObj, [updateType]: value });
//   };

//   return (
//     <div className="min-h-screen bg-base-200 flex items-center">
//       <div className="card mx-auto w-full max-w-5xl  shadow-xl">
//         <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
//           <div className="">
//             <LandingIntro />
//           </div>
//           <div className="py-24 px-10">
//             <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
//             <form onSubmit={(e) => submitForm(e)}>
//               <div className="mb-4">
//                 <InputText
//                   type="emailId"
//                   defaultValue={loginObj.emailId}
//                   updateType="emailId"
//                   containerStyle="mt-4"
//                   labelTitle="Email Id"
//                   updateFormValue={updateFormValue}
//                 />

//                 <InputText
//                   defaultValue={loginObj.password}
//                   type="password"
//                   updateType="password"
//                   containerStyle="mt-4"
//                   labelTitle="Password"
//                   updateFormValue={updateFormValue}
//                 />
//               </div>

//               <div className="text-right text-primary">
//                 <Link to="/forgot-password">
//                   <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
//                     Forgot Password?
//                   </span>
//                 </Link>
//               </div>

//               <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
//               <button
//                 type="submit"
//                 className={
//                   "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
//                 }
//               >
//                 Login
//               </button>

//               <div className="text-center mt-4">
//                 Don't have an account yet?{" "}
//                 <Link to="/register">
//                   <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
//                     Register
//                   </span>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

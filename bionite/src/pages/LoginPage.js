import { useState } from "react";
import { Link } from "react-router-dom";
// import LandingIntro from "./LandingIntro";
import ErrorText from "../components/Typography/ErrorText";
import InputText from "../components/Input/InputText";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.emailId.trim() === "")
      return setErrorMessage("Email Id is required!");
    if (loginObj.password.trim() === "")
      return setErrorMessage("Password is required!");
    else {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        localStorage.setItem("token", "DumyTokenHere");
        setLoading(false);
        window.location.href = "/app/welcome";
      }, 2000);
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="card w-full max-w-md bg-gray-900 shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold mb-4 text-center text-red-700">
            Login
          </h2>
          <form onSubmit={(e) => submitForm(e)}>
            <InputText
              type="email"
              defaultValue={loginObj.emailId}
              updateType="emailId"
              containerStyle="mt-4"
              labelTitle="Email Id"
              updateFormValue={updateFormValue}
              inputStyle="input input-bordered w-full"
            />

            <InputText
              defaultValue={loginObj.password}
              type="password"
              updateType="password"
              containerStyle="mt-4"
              labelTitle="Password"
              updateFormValue={updateFormValue}
              inputStyle="input input-bordered w-full"
            />

            {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-red-500 hover:text-red-600 transition duration-200 text-sm"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn mt-4 w-full ${
                loading ? "loading" : ""
              } bg-red-700 hover:bg-red-800 text-white`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center mt-4 text-white">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="text-red-500 hover:text-red-600 transition duration-200"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

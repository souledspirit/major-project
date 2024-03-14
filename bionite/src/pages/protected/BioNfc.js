import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setPageTitle } from "../../features/common/headerSlice";
import nfcIcon from "../../assets/nfc.svg"; // Adjust path as necessary
import fingerprintIcon from "../../assets/fingerprint.svg";

function InternalPage() {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showBiometricAlert, setShowBiometricAlert] = useState(false);
  const [biometricAlertMessage, setBiometricAlertMessage] = useState("");

  useEffect(() => {
    dispatch(setPageTitle({ title: "NFC & BIOMETRIC" }));
  }, [dispatch]);

  // Example function to handle NFC update button click
  const handleUpdateNfcClick = async () => {
    // Implement the call to the NFC update API here
    console.log("Updating NFC details...");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/students/students/nfc`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (response.data.success) {
        setAlertMessage("NFC details successfully updated."); // Customize message
        setShowAlert(true); // Show success alert
        setTimeout(() => setShowAlert(false), 3000); // Optionally hide alert after 3 seconds
      }
    } catch (error) {
      console.error("Failed to update NFC information", error);
      // Handle error appropriately
    }
  };

  // Example function to handle biometric update button click
  const handleUpdateBiometricClick = async () => {
    // Implement the call to the biometric update API here

    console.log("Updating biometric details...");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/students/students/biometric`, // Assuming you might need to send an empty body or some specific data
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (response.data.success) {
        setBiometricAlertMessage("Biometric details successfully updated.");
        setShowBiometricAlert(true);
        setTimeout(() => setShowBiometricAlert(false), 3000);
      }
    } catch (error) {
      console.error("Failed to update biometric information", error);
      // Handle error appropriately, could set error message and show alert as well
    }
  };

  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row justify-center items-stretch gap-10">
        {/* NFC Update Card */}

        <div className="card w-96 bg-base-100 shadow-xl flex-none">
          <div className="card-body text-center">
            <h1 className="card-title mb-4">NFC</h1>
            <img
              src={nfcIcon}
              alt="NFC Icon"
              className="mx-auto mb-4 w-20 h-20"
            />{" "}
            {/* Adjust size as necessary */}
            <p className="mb-6">
              "For registering NFC card, tap the card on the sensor after
              clicking the button."
            </p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-outline"
                onClick={handleUpdateNfcClick}
              >
                Update NFC Details
              </button>
            </div>
            {showAlert && (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
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
                  <span>{alertMessage}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Biometric Update Card */}
        <div className="card w-96 bg-base-100 shadow-xl flex-none">
          <div className="card-body text-center">
            <h1 className="card-title mb-4">Biometric</h1>
            <img
              src={fingerprintIcon}
              alt="Fingerprint Icon"
              className="mx-auto mb-4 w-20 h-20"
            />{" "}
            {/* Adjust size as necessary */}
            <p className="mb-6">
              "For registering fingerprint, tap once then again to register
              fingerprint."
            </p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-outline"
                onClick={handleUpdateBiometricClick}
              >
                Update Biometric Details
              </button>
            </div>
            {showBiometricAlert && (
              <div className="alert alert-success shadow-lg mt-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
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
                  <span>{biometricAlertMessage}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;

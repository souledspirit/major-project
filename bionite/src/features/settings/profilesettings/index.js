import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import InputTextSecond from "../../../components/Input/InputTextSecond";
import SelectBox from "../../../components/Input/SelectBox";
import { updateAdditionalDetails } from "../../../features/auth/authSlice"; // Import the action
import { useNavigate } from "react-router-dom";

function ProfileSettings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const studentId = user?.additionalDetails?._id;

  const [profile, setProfile] = useState({
    name: "",
    course: "",
    year: "",
    section: "",
    academicLevel: "",
    currentSemester: "",
    departmentName: "",
    className: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const departmentOptions = [
    { name: "Computer Engineering", value: "Computer Engineering" },

    // Add more departments as needed
  ];
  const updateFormValue = (name, value) => {
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateProfile = async () => {
    const body = {
      name: profile.name,
      course: profile.course,
      year: profile.year,
      section: profile.section,
      academicLevel: profile.academicLevel,
      currentSemester: profile.currentSemester,
      departmentName: profile.departmentName,
      className: profile.className,
    };

    // Set up the request headers
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/students/update-details/${studentId}`, // Using the studentId in the URL
        body,
        { headers }
      );
      dispatch(updateAdditionalDetails(response.data.data)); // Assuming this updates the Redux state correctly
      setSuccessMessage("Profile Updated Successfully");
      setErrorMessage("");
      setIsModalOpen(true);
    } catch (error) {
      console.error(
        "Failed to update profile",
        error.response?.data?.message || "An error occurred"
      );
      setErrorMessage(
        error.response?.data?.message || "Failed to Update Profile"
      );
      setSuccessMessage("");
    }
  };
  return (
    <>
      <TitleCard title="Profile Settings" topMargin="mt-2">
        {/* Success Alert */}
        {successMessage && (
          <div role="alert" className="alert alert-success shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{successMessage}</span>
            </div>
          </div>
        )}

        {/* Error Text */}
        {errorMessage && (
          <div role="alert" className="alert alert-error shadow-lg mt-4">
            <div>
              <span>{errorMessage}</span>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations!</h3>
              <p className="py-4">
                Your profile has been updated successfully.
              </p>
              <p className="py-4">
                If you are a new student, please update NFC & Biometric
                information accordingly or else close this.
              </p>
              <div className="modal-action">
                <button className="btn" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/app/NfcBioRegister")}
                >
                  Go to Update Page
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Include your form fields here */}
          <InputTextSecond
            labelTitle="Name"
            name="name"
            defaultValue={profile.name}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Email Id"
            name="emailId"
            defaultValue={profile.emailId}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Course"
            name="course"
            defaultValue={profile.course}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Year"
            name="year"
            defaultValue={profile.year}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Section"
            name="section"
            defaultValue={profile.section}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Academic Level"
            name="academicLevel"
            defaultValue={profile.academicLevel}
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Current Semester"
            name="currentSemester"
            defaultValue={profile.currentSemester}
            updateFormValue={updateFormValue}
          />
          {/* Other fields remain unchanged */}

          <InputTextSecond
            labelTitle="Department Name"
            name="departmentName"
            defaultValue={profile.departmentName}
            updateFormValue={updateFormValue}
          />

          <InputTextSecond
            labelTitle="Class Name"
            name="className"
            defaultValue={profile.className}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-8">
          <button
            className="btn btn-primary float-right"
            onClick={updateProfile}
          >
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;

import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import InputTextSecond from "../../../components/Input/InputTextSecond";
import SelectBox from "../../../components/Input/SelectBox";

const AddClassWithTimetable = () => {
  const authToken = useSelector((state) => state.auth.token);
  const [classDetails, setClassDetails] = useState({
    className: "",
    classCode: "",
    Class_instructor: "",
    room: "",
    departmentName: "",
    year: "",
  });
  const [timetableDetails, setTimetableDetails] = useState({
    semester: "6",
    startDate: "",
    endDate: "",
  });
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    message: "",
    color: "",
  });

  const updateFormValue = (updateType, value) => {
    if (updateType in classDetails) {
      setClassDetails({ ...classDetails, [updateType]: value });
    } else if (updateType in timetableDetails) {
      setTimetableDetails({ ...timetableDetails, [updateType]: value });
    }
  };

  const handleSubmit = async () => {
    const body = { classDetails, timetableDetails };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/timetable/classWithTimetable`,
        body
      );
      console.log("Success:", response.data);
      setModalContent({
        isOpen: true,
        message: "Class and Timetable added successfully",
        color: "green",
      });
      // Handle success, e.g., showing a success message or redirecting
    } catch (error) {
      console.error(
        setModalContent({
          isOpen: true,
          message: error.response?.data?.message || "An error occurred",
          color: "red",
        })
      );

      // Handle error, e.g., showing an error message
    }
  };

  return (
    <TitleCard title="Class add" topMargin="mt-2">
      <div className="card bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title">Add Class & Timetable</h2>
          <InputTextSecond
            labelTitle="Class Name"
            name="className"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Class Code"
            name="classCode"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Instructor"
            name="Class_instructor"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Room"
            name="room"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Department Name"
            name="departmentName"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="Year"
            type="number"
            name="year"
            updateFormValue={updateFormValue}
          />
          <SelectBox
            labelTitle="Semester"
            options={[
              { name: "Semester 1", value: "1" },
              { name: "Semsester 2", value: "2" },
              { name: "Semester 3", value: "3" },
              { name: "Semester 4", value: "4" },
              { name: "Semester 5", value: "5" },
              { name: "Semester 6", value: "6" },
            ]}
            updateType="semester"
            updateFormValue={updateFormValue}
            placeholder="Select Semester"
          />
          <InputTextSecond
            labelTitle="Start Date"
            type="date"
            name="startDate"
            updateFormValue={updateFormValue}
          />
          <InputTextSecond
            labelTitle="End Date"
            type="date"
            name="endDate"
            updateFormValue={updateFormValue}
          />
          {modalContent.isOpen && (
            <div className="modal modal-open">
              <div className="modal-box">
                <h3
                  className={`text-lg font-bold text-${modalContent.color}-500`}
                >
                  {modalContent.message}
                </h3>
                <div className="modal-action">
                  <button
                    className="btn btn-primary" // Updated class here
                    onClick={() =>
                      setModalContent({ isOpen: false, message: "", color: "" })
                    }
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </TitleCard>
  );
};

export default AddClassWithTimetable;

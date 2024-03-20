import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import axios from "axios";
import TitleCard from "../../components/Cards/TitleCard";
import InputTextSecond from "../../components/Input/InputTextSecond";
import React, { useState } from "react";

function InternalPage() {
  const [formData, setFormData] = useState({
    semester: "",
    year: "",
    className: "",
    classCode: "",
    day: "",
    startTime: "",
    endTime: "",
    subject: "",
    subject_instructor: "",
    sessionType: "",
  });
  const [modalContent, setModalContent] = useState({
    isOpen: false,
    message: "",
    color: "",
  });
  useEffect(() => {
    dispatch(setPageTitle({ title: "Session " }));
  }, []);
  const updateFormValue = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const convertToUTC = (dateString) => {
    // Create a date object using the local date string
    let date = new Date(dateString);

    // Convert to UTC by subtracting 5 hours and 30 minutes
    date.setHours(date.getHours() + 10, date.getMinutes() + 60);

    // Return the adjusted date as an ISO string
    return date.toISOString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const convertedStartTime = convertToUTC(formData.startTime);
    const convertedEndTime = convertToUTC(formData.endTime);
    console.log("Sending payload:", {
      semester: formData.semester,
      year: formData.year,
      classDetails: {
        className: formData.className,
        classCode: formData.classCode,
      },
      session: {
        day: formData.day,
        startTime: convertedStartTime,
        endTime: convertedEndTime,
        subject: formData.subject,
        subject_instructor: formData.subject_instructor,
        sessionType: formData.sessionType,
      },
    });
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/timetable/addSession`,
        {
          semester: formData.semester,
          year: formData.year,
          classDetails: {
            className: formData.className,
            classCode: formData.classCode,
          },
          session: {
            day: formData.day,
            startTime: convertedStartTime,
            endTime: convertedEndTime,
            subject: formData.subject,
            subject_instructor: formData.subject_instructor,
            sessionType: formData.sessionType,
          },
        }
      );
      console.log("Success:", response.data);
      setModalContent({
        isOpen: true,
        message: "session added successfully",
        color: "green",
      });
      // Handl
    } catch (error) {
      console.error(
        setModalContent({
          isOpen: true,
          message: error.response?.data?.message || "An error occurred",
          color: "red",
        })
      );
    }
  };
  const dispatch = useDispatch();

  return (
    <>
      <TitleCard title="session add" topMargin="mt-2">
        <div className="container mx-auto p-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <InputTextSecond
              labelTitle="Semester"
              name="semester"
              defaultValue={formData.semester}
              updateFormValue={updateFormValue}
              placeholder="Enter Semester"
            />
            <InputTextSecond
              labelTitle="Year"
              name="year"
              defaultValue={formData.year}
              updateFormValue={updateFormValue}
              placeholder="Enter Year"
            />
            <InputTextSecond
              labelTitle="Class Name"
              name="className"
              defaultValue={formData.className}
              updateFormValue={updateFormValue}
              placeholder="Enter Class Name"
            />
            <InputTextSecond
              labelTitle="Class Code"
              name="classCode"
              defaultValue={formData.classCode}
              updateFormValue={updateFormValue}
              placeholder="Enter Class Code"
            />
            <InputTextSecond
              labelTitle="Day"
              name="day"
              defaultValue={formData.day}
              updateFormValue={updateFormValue}
              placeholder="Enter Day (MON, TUE...)"
            />
            <InputTextSecond
              labelTitle="Start Time"
              type="datetime-local"
              name="startTime"
              defaultValue={formData.startTime}
              updateFormValue={updateFormValue}
              placeholder="Start Time"
            />
            <InputTextSecond
              labelTitle="End Time"
              type="datetime-local"
              name="endTime"
              defaultValue={formData.endTime}
              updateFormValue={updateFormValue}
              placeholder="End Time"
            />
            <InputTextSecond
              labelTitle="Subject"
              name="subject"
              defaultValue={formData.subject}
              updateFormValue={updateFormValue}
              placeholder="Enter Subject"
            />
            <InputTextSecond
              labelTitle="Subject Instructor"
              name="subject_instructor"
              defaultValue={formData.subject_instructor}
              updateFormValue={updateFormValue}
              placeholder="Enter Subject Instructor"
            />
            <InputTextSecond
              labelTitle="Session Type"
              name="sessionType"
              defaultValue={formData.sessionType}
              updateFormValue={updateFormValue}
              placeholder="Enter Session Type (LECTURE, LAB)"
            />
            <div className="form-control w-full">
              <button type="submit" className="btn btn-primary mt-4">
                Add Session
              </button>
            </div>
          </form>
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
        </div>
      </TitleCard>
    </>
  );
}

export default InternalPage;

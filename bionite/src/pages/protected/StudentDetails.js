import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import { Link } from "react-router-dom";
import { CircleStackIcon } from "@heroicons/react/24/outline";

function InternalPage() {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const studentId = user?.studentDetails?._id;
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    dispatch(setPageTitle({ title: "Student Details" }));
    if (studentId) {
      fetchStudentDetails();
    }
  }, [dispatch, studentId]);

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/students/students/${studentId}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      setStudentDetails(response.data);
    } catch (error) {
      console.error("Failed to fetch student details", error);
      // You may want to handle errors, e.g., set an error state and display it
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        {studentDetails ? (
          <div className="card w-full max-w-md bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <CircleStackIcon className="h-8 w-8 text-gray-500 mb-2" />
              <h2 className="card-title text-lg">{studentDetails.name}</h2>
              <table className="table w-full table-compact">
                <tbody>
                  {[
                    { label: "Course", value: studentDetails.course },
                    { label: "Year", value: studentDetails.year },
                    { label: "Section", value: studentDetails.section },
                    {
                      label: "Academic Level",
                      value: studentDetails.academicLevel,
                    },
                    {
                      label: "Current Semester",
                      value: studentDetails.currentSemester,
                    },
                    { label: "Status", value: studentDetails.status },
                    {
                      label: "Department Name",
                      value: studentDetails.departmentName,
                    },
                    // Add more fields as needed
                  ].map((detail, index) => (
                    <tr key={index}>
                      <td className="text-left font-semibold">
                        {detail.label}
                      </td>
                      <td>{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="card-actions justify-end mt-4">
                <Link to="/app/dashboard">
                  <button className="btn btn-outline btn-accent">
                    Back to Dashboard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading student details...</p>
        )}
      </div>
    </div>
  );
}

export default InternalPage;

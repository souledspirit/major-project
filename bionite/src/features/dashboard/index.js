import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DashboardStats from "./components/DashboardStats";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon"; // New icon for time

function Dashboard() {
  const authToken = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const studentId = user?.additionalDetails?._id;
  console.log("studentId", studentId);
  const [attendanceSummary, setAttendanceSummary] = useState(null);

  useEffect(() => {
    if (studentId) {
      fetchAttendanceSummary(studentId);
    }
  }, [studentId]);

  const fetchAttendanceSummary = async (studentId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/attendance/api/students/${studentId}/attendance-summary`
      );
      const summary = response.data.data;
      // Calculate the attendance percentage based on the total hours attended
      // Assuming 8 hours in a day for simplicity
      const attendancePercentage = (summary.totalHoursAttended / 8) * 100;

      setAttendanceSummary({
        presentToday: summary.presentToday ? "Present" : "Absent",
        totalHoursAttended: summary.totalHoursAttended,
        checkInTime: summary.attendanceDetails?.checkInTime,
        checkOutTime: summary.attendanceDetails?.checkOutTime,
        attendancePercentage: attendancePercentage.toFixed(2) + "%",
      });
    } catch (error) {
      console.error("Failed to fetch attendance summary", error);
    }
  };

  const statsData = [
    {
      title: "Present Today",
      value: attendanceSummary ? attendanceSummary.presentToday : "Loading...",
      icon: <UserGroupIcon className="w-8 h-8" />,
      description: "Your attendance status for today.",
    },
    {
      title: "Total Hours Attended",
      value: attendanceSummary
        ? attendanceSummary.totalHoursAttended.toString()
        : "Loading...",
      icon: <CreditCardIcon className="w-8 h-8" />,
      description: "Total hours you've attended classes today.",
    },
    {
      title: "Check-In Time",
      value: attendanceSummary?.checkInTime
        ? new Date(attendanceSummary.checkInTime).toLocaleTimeString()
        : "Loading...",
      icon: <ClockIcon className="w-8 h-8" />,
      description: "The time you checked in today.",
    },
    {
      title: "Check-Out Time",
      value: attendanceSummary?.checkOutTime
        ? new Date(attendanceSummary.checkOutTime).toLocaleTimeString()
        : "Loading...",
      icon: <ClockIcon className="w-8 h-8" />,
      description: "The time you checked out today.",
    },
    {
      title: "Attendance Percentage",
      value: attendanceSummary
        ? attendanceSummary.attendancePercentage
        : "Loading...",
      icon: <UsersIcon className="w-8 h-8" />,
      description: "Percentage based on today's attendance.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {statsData.map((data, index) => (
        <DashboardStats key={index} {...data} colorIndex={index} />
      ))}
    </div>
  );
}

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import DashboardStats from "./components/DashboardStats";
// import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
// import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
// import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
// import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";

// function Dashboard() {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const studentId = user?.studentDetails?._id;
//   const [attendanceSummary, setAttendanceSummary] = useState(null);

//   useEffect(() => {
//     if (studentId) {
//       fetchAttendanceSummary(studentId);
//     }
//   }, [studentId]);

//   const fetchAttendanceSummary = async (studentId) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/api/attendance/students/${studentId}/attendance-summary`
//       );
//       const summary = response.data.data;
//       // Assume or compute additional stats like "Number Of Periods" and "Attendance Percentage" here
//       // For example, these are dummy values:
//       const numberOfPeriods = 3; // This could be derived from another API call or logic
//       const attendancePercentage = (summary.totalHoursAttended / 8) * 100; // Assuming 8 hours in a day for simplicity

//       setAttendanceSummary({
//         presentToday: summary.presentToday ? "Present" : "Absent",
//         totalHoursAttended: summary.totalHoursAttended,
//         numberOfPeriods, // Add this
//         attendancePercentage: attendancePercentage.toFixed(2) + "%", // Add this
//       });
//     } catch (error) {
//       console.error("Failed to fetch attendance summary", error);
//     }
//   };

//   const statsData = [
//     {
//       title: "Present Day Attendance",
//       value: attendanceSummary ? attendanceSummary.presentToday : "Loading...",
//       icon: <UserGroupIcon className="w-8 h-8" />,
//       description: "approved",
//     },
//     {
//       title: "Number Of Hours",
//       value: attendanceSummary
//         ? attendanceSummary.totalHoursAttended.toString()
//         : "Loading...",
//       icon: <CreditCardIcon className="w-8 h-8" />,
//       description: "Time duration",
//     },
//     {
//       title: "Number Of Period",
//       value: attendanceSummary
//         ? attendanceSummary.numberOfPeriods.toString()
//         : "Loading...",
//       icon: <CircleStackIcon className="w-8 h-8" />,
//       description: "Attended",
//     },
//     {
//       title: "Attendance Percentage",
//       value: attendanceSummary
//         ? attendanceSummary.attendancePercentage
//         : "Loading...",
//       icon: <UsersIcon className="w-8 h-8" />,
//       description: "based on current day",
//     },
//   ];

//   return (
//     <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
//       {statsData.map((d, index) => (
//         <DashboardStats key={index} {...d} colorIndex={index} />
//       ))}
//     </div>
//   );
// }

// export default Dashboard;

// import DashboardStats from "./components/DashboardStats";
// import AmountStats from "./components/AmountStats";
// import PageStats from "./components/PageStats";

// import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
// import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
// import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
// import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
// import UserChannels from "./components/UserChannels";
// import LineChart from "./components/LineChart";
// import BarChart from "./components/BarChart";

// import { useDispatch } from "react-redux";
// import { showNotification } from "../common/headerSlice";
// import DoughnutChart from "./components/DoughnutChart";
// import { useState } from "react";

// const statsData = [
//   {
//     title: "Present Day Attendance",
//     value: "Present",
//     icon: <UserGroupIcon className="w-8 h-8" />,
//     description: "approved",
//   },
//   {
//     title: "Number Of Hours",
//     value: "3",
//     icon: <CreditCardIcon className="w-8 h-8" />,
//     description: "Time duration",
//   },
//   {
//     title: "Number Of Period ",
//     value: "3",
//     icon: <CircleStackIcon className="w-8 h-8" />,
//     description: "Attended",
//   },
//   {
//     title: "Attendance Percentage",
//     value: "35.5%",
//     icon: <UsersIcon className="w-8 h-8" />,
//     description: "based on current day",
//   },
// ];

// function Dashboard() {
//   const dispatch = useDispatch();

//   const updateDashboardPeriod = (newRange) => {
//     // Dashboard range changed, write code to refresh your values
//     dispatch(
//       showNotification({
//         message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
//         status: 1,
//       })
//     );
//   };

//   return (
//     <>
//       {/** ---------------------- Select Period Content ------------------------- */}
//       {/** ---------------------- Different stats content 1 ------------------------- */}
//       <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
//         {statsData.map((d, k) => {
//           return <DashboardStats key={k} {...d} colorIndex={k} />;
//         })}
//       </div>
{
  /* * ---------------------- Different charts ------------------------- */
}
{
  /* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div> */
}
{
  /** ---------------------- Different stats content 2 ------------------------- */
}
{
  /* <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div> */
}
{
  /** ---------------------- User source channels table  ------------------------- */
}
{
  /* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div> */
}
// </>
//   );
// }

// export default Dashboard;

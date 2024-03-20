// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));

const Blank = lazy(() => import("../pages/protected/Blank"));

const StaffDashBoard = lazy(() => import("../pages/protected/StaffDashBoard"));

const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);

const NfcBioRegister = lazy(() => import("../pages/protected/BioNfc"));

const StudentDetails = lazy(() => import("../pages/protected/StudentDetails"));

const StudentList = lazy(() => import("../pages/protected/StudentDetailList"));

const AddClassWithTimetable = lazy(() =>
  import("../pages/protected/AddClassWithTimetable")
);

const AddSession = lazy(() => import("../pages/protected/AddSessionForm"));
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
    roles: ["student"],
  },

  {
    path: "/staff-dashboard",
    component: StaffDashBoard,
    roles: ["faculty"],
  },

  {
    path: "/add-class-with-timetable",
    component: AddClassWithTimetable,
    roles: ["faculty"],
  },
  {
    path: "/add-session",
    component: AddSession,
    roles: ["faculty"],
  },
  {
    path: "/StudentList",
    component: StudentList,
    roles: ["faculty"],
  },
  {
    path: "/student-details",
    component: StudentDetails,
    roles: ["student"],
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
    roles: ["student"], //
  },

  {
    path: "/blank",
    component: Blank,
    roles: ["staff"],
  },
  {
    path: "/NfcBioRegister",
    component: NfcBioRegister,
    roles: ["student"],
  },
];

export default routes;

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

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
    roles: ["student", "staff"],
  },

  {
    path: "/staff-dashboard",
    component: StaffDashBoard,
    roles: ["staff"],
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

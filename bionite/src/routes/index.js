// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Leads = lazy(() => import("../pages/protected/Leads"));
const Integration = lazy(() => import("../pages/protected/Integration"));
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
    roles: ["student", "staff"],
  },
  {
    path: "/welcome", // the url
    component: Welcome,
    roles: ["staff"], // view rendered
  },
  {
    path: "/leads",
    component: Leads,
    roles: ["staff"], //
  },
  {
    path: "/settings-team",
    component: Team,
    roles: ["staff"], //
  },
  {
    path: "/calendar",
    component: Calendar,
    roles: ["staff"], //
  },
  {
    path: "/transactions",
    component: Transactions,
    roles: ["staff"], //
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
    roles: ["staff"], //
  },
  {
    path: "/settings-billing",
    component: Bills,
    roles: ["staff"],
  },
  {
    path: "/getting-started",
    component: GettingStarted,
    roles: ["staff"],
  },
  {
    path: "/features",
    component: DocFeatures,
    roles: ["staff"],
  },
  {
    path: "/components",
    component: DocComponents,
    roles: ["staff"],
  },
  {
    path: "/integration",
    component: Integration,
    roles: ["staff"],
  },
  {
    path: "/charts",
    component: Charts,
    roles: ["staff"],
  },
  {
    path: "/404",
    component: Page404,
    roles: ["staff"],
  },
  {
    path: "/blank",
    component: Blank,
    roles: ["staff"],
  },
];

export default routes;

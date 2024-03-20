/** Icons are imported separatly to reduce build time */

import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import { CpuChipIcon } from "@heroicons/react/24/outline"; // Corrected import
import { CloudArrowDownIcon } from "@heroicons/react/24/outline"; // Corrected import
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
    roles: ["student"],
  },
  {
    path: "/app/staff-dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Staff Dashboard",
    roles: ["faculty"],
  },
  {
    path: "/app/add-class-with-timetable", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Time Table", // name that appear in Sidebar
    roles: ["faculty"],
  },
  {
    path: "/app/add-session", // url
    icon: <PlusCircleIcon className={iconClasses} />, // icon component
    name: "Add Session", // name that appear in Sidebar
    roles: ["faculty"],
  },
  {
    path: "/app/StudentList", // url
    icon: <ListBulletIcon className={iconClasses} />, // icon component
    name: "Student List",
    roles: ["faculty"], // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    roles: ["student"],
    submenu: [
      {
        path: "/app/student-details",
        icon: <CloudArrowDownIcon className={submenuIconClasses} />,
        name: "Student Details",
      },
      {
        path: "/app/NfcBioRegister", //url
        icon: <CpuChipIcon className={submenuIconClasses} />, // icon component
        name: "NFC & Biometric", // name that appear in Sidebar
      },
      {
        path: "/app/settings-profile", //url
        icon: <UserIcon className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
    ],
  },
];

export default routes;

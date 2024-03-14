/** Icons are imported separatly to reduce build time */

import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";

import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";

import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import { CpuChipIcon } from "@heroicons/react/24/outline"; // Corrected import
import { CloudArrowDownIcon } from "@heroicons/react/24/outline"; // Corrected import

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
    roles: ["staff"],
  },
  {
    path: "/app/leads", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Leads", // name that appear in Sidebar
    roles: ["staff"],
  },
  {
    path: "/app/transactions", // url
    icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
    name: "Transactions",
    roles: ["staff"], // name that appear in Sidebar
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

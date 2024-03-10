import routes from "../../routes/sidebar";
import { NavLink, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import hiveImage from "../../assets/hive.png";
import { useSelector } from "react-redux";
// Other imports...

function LeftSidebar() {
  const location = useLocation();
  const userRole = useSelector((state) => state.auth.user?.role);
  console.log("User role from state:", userRole);

  // Filter routes based on the user's role
  // const filteredRoutes = routes.filter(
  //   (route) => routes.roles?.includes(userRole) || !routes.roles
  // );

  const filteredRoutes = routes.filter(
    (route) => !route.roles || route.roles.includes(userRole)
  );
  console.log("Filtered Routes based on role:", filteredRoutes);

  return (
    <div className="drawer-side z-30">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => document.getElementById("left-sidebar-drawer").click()}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="mb-2 font-semibold text-xl">
          <Link to={"/app/welcome"}>
            <img
              className="mask mask-squircle w-10"
              src={hiveImage}
              alt="Bionite Logo"
            />
            Bionite
          </Link>
        </li>
        {routes
          .filter((route) => route.roles?.includes(userRole) || !route.roles)
          .map((route, k) => (
            <li key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "font-semibold bg-base-200" : "font-normal"
                  }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-primary"
                      aria-hidden="true"
                    ></span>
                  )}
                </NavLink>
              )}
            </li>
          ))}
        {/* {console.log("Filtered Routes:", filteredRoutes)} */}
      </ul>
    </div>
  );
}

export default LeftSidebar;

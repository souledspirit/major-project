import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import { useSelector, useDispatch } from "react-redux";

import "react-notifications/lib/notifications.css";
import ModalLayout from "./ModalLayout";

function Layout() {
  const dispatch = useDispatch();

  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer  lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSidebar />
      </div>

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      {/* <RightSidebar /> */}

      {/** Notification layout container */}

      {/* Modal layout container */}
      <ModalLayout />
    </>
  );
}

export default Layout;

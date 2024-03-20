import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";

import AddClassWithTimetable from "../../features/settings/AddClassWithTimetable";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Time Table" }));
  }, []);

  return <AddClassWithTimetable />;
}

export default InternalPage;

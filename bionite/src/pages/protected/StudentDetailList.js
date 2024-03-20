import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";

import StudentList from "../../features/StudentList";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Student List" }));
  }, []);

  return <StudentList />;
}

export default InternalPage;

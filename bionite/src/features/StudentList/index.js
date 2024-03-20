import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/students/students`
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const approveStudent = async (studentId) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/students/students/approve/${studentId}`
      );
      fetchStudents(); // Refresh the list to reflect the change
    } catch (error) {
      console.error("Error approving student:", error);
    }
  };

  const rejectStudent = async (studentId) => {
    try {
      await axios.post(`/api/students/${studentId}/reject`);
      fetchStudents(); // Refresh the list to reflect the change
    } catch (error) {
      console.error("Error rejecting student:", error);
    }
  };

  // Helper function to display text if a field is empty
  const displayText = (text) => (text.trim() === "" ? "N/A" : text);

  return (
    <>
      <div className="card bg-base-100 ">
        <div className="overflow-x-auto w-full mt-2">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Current Semester</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id || student.id}>
                  <td>{displayText(student.name)}</td>
                  <td>{displayText(student.course)}</td>
                  <td>{displayText(student.currentSemester)}</td>
                  <td>{student.status}</td>
                  <td>
                    <button
                      onClick={() => approveStudent(student._id || student.id)}
                      className="btn btn-success mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectStudent(student._id || student.id)}
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StudentList;

// import moment from "moment";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { showNotification } from "../common/headerSlice";
// import TitleCard from "../../components/Cards/TitleCard";
// import { RECENT_TRANSACTIONS } from "../../utils/dummyData";
// import FunnelIcon from "@heroicons/react/24/outline/FunnelIcon";
// import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
// import SearchBar from "../../components/Input/SearchBar";

// const TopSideButtons = ({ removeFilter, applyFilter, applySearch }) => {
//   const [filterParam, setFilterParam] = useState("");
//   const [searchText, setSearchText] = useState("");
//   const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"];

//   const showFiltersAndApply = (params) => {
//     applyFilter(params);
//     setFilterParam(params);
//   };

//   const removeAppliedFilter = () => {
//     removeFilter();
//     setFilterParam("");
//     setSearchText("");
//   };

//   useEffect(() => {
//     if (searchText == "") {
//       removeAppliedFilter();
//     } else {
//       applySearch(searchText);
//     }
//   }, [searchText]);

//   return (
//     <div className="inline-block float-right">
//       <SearchBar
//         searchText={searchText}
//         styleClass="mr-4"
//         setSearchText={setSearchText}
//       />
//       {filterParam != "" && (
//         <button
//           onClick={() => removeAppliedFilter()}
//           className="btn btn-xs mr-2 btn-active btn-ghost normal-case"
//         >
//           {filterParam}
//           <XMarkIcon className="w-4 ml-2" />
//         </button>
//       )}
//       <div className="dropdown dropdown-bottom dropdown-end">
//         <label tabIndex={0} className="btn btn-sm btn-outline">
//           <FunnelIcon className="w-5 mr-2" />
//           Filter
//         </label>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52"
//         >
//           {locationFilters.map((l, k) => {
//             return (
//               <li key={k}>
//                 <a onClick={() => showFiltersAndApply(l)}>{l}</a>
//               </li>
//             );
//           })}
//           <div className="divider mt-0 mb-0"></div>
//           <li>
//             <a onClick={() => removeAppliedFilter()}>Remove Filter</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// function StudentList() {
//   const [trans, setTrans] = useState(RECENT_TRANSACTIONS);

//   const removeFilter = () => {
//     setTrans(RECENT_TRANSACTIONS);
//   };

//   const applyFilter = (params) => {
//     let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {
//       return t.location == params;
//     });
//     setTrans(filteredTransactions);
//   };

//   // Search according to name
//   const applySearch = (value) => {
//     let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {
//       return (
//         t.email.toLowerCase().includes(value.toLowerCase()) ||
//         t.email.toLowerCase().includes(value.toLowerCase())
//       );
//     });
//     setTrans(filteredTransactions);
//   };

//   return (
//     <>
//       <TitleCard
//         title="Students List"
//         topMargin="mt-2"
//         TopSideButtons={
//           <TopSideButtons
//             applySearch={applySearch}
//             applyFilter={applyFilter}
//             removeFilter={removeFilter}
//           />
//         }
//       >
//         {/* Team Member list in table format loaded constant */}
//         <div className="overflow-x-auto w-full">
//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email Id</th>
//                 <th>Location</th>
//                 <th>Amount</th>
//                 <th>Transaction Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {trans.map((l, k) => {
//                 return (
//                   <tr key={k}>
//                     <td>
//                       <div className="flex items-center space-x-3">
//                         <div className="avatar">
//                           <div className="mask mask-circle w-12 h-12">
//                             <img src={l.avatar} alt="Avatar" />
//                           </div>
//                         </div>
//                         <div>
//                           <div className="font-bold">{l.name}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td>{l.email}</td>
//                     <td>{l.location}</td>
//                     <td>${l.amount}</td>
//                     <td>{moment(l.date).format("D MMM")}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </TitleCard>
//     </>
//   );
// }

// export default StudentList;

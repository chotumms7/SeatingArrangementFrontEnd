
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./StudentReport.css"; // Import the custom CSS file for student report page styling

// const StudentReport = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // Fetch student details for the report from the backend
//     fetchStudentReport();
//   }, []);

//   const fetchStudentReport = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/studentdetails/report");
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Error fetching student report:", error);
//     }
//   };

//   return (
//     <div className="container mt-4 student-report-page">
//       <h2 className="text-center mb-4">Allocated Students List</h2>
//       <div className="table-responsive">
//         <div className="student-table-container">
//           <table className="table table-bordered table-striped student-table">
//             <thead className="thead-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Student Name</th>
//                 <th>Branch</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr key={student.id}>
//                   <td>{student.id}</td>
//                   <td>{student.studentName}</td>
//                   <td>{student.branch}</td>
//                   <td>{student.emailId}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentReport;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StudentReport.css"; // Import the custom CSS file for student report page styling

const StudentReport = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate(); // Use the useNavigate hook to navigate to other pages

  useEffect(() => {
    // Fetch student details for the report from the backend
    fetchStudentReport();
  }, []);

  const fetchStudentReport = async () => {
    try {
      const response = await axios.get("http://localhost:8080/studentdetails/report");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching student report:", error);
    }
  };

  // Handle logout button click
  const handleLogout = () => {
    // Perform any logout actions here (if needed)
    navigate("/"); // Navigate to the main page (main.js)
  };

  return (
    <div className="container mt-4 student-report-page">
      {/* Logout button */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h2 className="text-center mb-4">Allocated Students List</h2>
      <div className="table-responsive">
        <div className="student-table-container">
          <table className="table table-bordered table-striped student-table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Branch</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.studentName}</td>
                  <td>{student.branch}</td>
                  <td>{student.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentReport;

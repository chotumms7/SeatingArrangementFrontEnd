
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./StudentReport.css"; // Import the custom CSS file for student report page styling

// const StudentReport = () => {
//   const [students, setStudents] = useState([]);
//   const navigate = useNavigate(); // Use the useNavigate hook to navigate to other pages

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

//   // Handle logout button click
//   const handleLogout = () => {
//     // Perform any logout actions here (if needed)
//     navigate("/main"); // Navigate to the main page (main.js)
//   };

//   return (
//     <div className="container mt-4 student-report-page">
//       {/* Logout button */}
//       <button className="logout-button" onClick={handleLogout}>
//         Logout
//       </button>
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
import "./StudentReport.css";

const StudentReport = () => {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null); // State to hold the data of the student being edited
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleLogout = () => {
    navigate("/main");
  };

  // Function to handle the edit button click
  const handleEditClick = (student) => {
    setEditData(student);
  };

  // Function to handle the form submission for student details update
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/studentdetails/update/${editData.id}`,
        editData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Student details updated successfully:", response.data);
      // Clear the editData after successful update
      setEditData(null);
      // Fetch the updated student report
      fetchStudentReport();
    } catch (error) {
      console.error("Error updating student details:", error);
    }
  };

  // Function to handle the form change while updating student details
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevEditData) => ({ ...prevEditData, [name]: value }));
  };

  return (
    <div className="container mt-4 student-report-page">
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
                <th>Edit</th> {/* Add a new column for the Edit button */}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.studentName}</td>
                  <td>{student.branch}</td>
                  <td>{student.emailId}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditClick(student)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Show the student details form if editData is not null */}
      {editData && (
        <div className="form-container">
          <h2>Edit Student Details</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={editData.studentName}
                onChange={handleFormChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                name="emailId"
                value={editData.emailId}
                onChange={handleFormChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Branch:</label>
              <input
                type="text"
                name="branch"
                value={editData.branch}
                onChange={handleFormChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Marks:</label>
              <input
                type="text"
                name="marks"
                value={editData.marks}
                onChange={handleFormChange}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentReport;

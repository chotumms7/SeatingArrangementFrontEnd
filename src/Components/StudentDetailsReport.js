
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

import "./StudentDetailsReport.css"; 

const StudentDetailsReport = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const navigate = useNavigate(); // Get the history object to handle navigation

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/blueprint/all");
      setStudentDetails(response.data);
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    
    navigate("/main");
  };

  return (
    <div className="student-details-report-container">
      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h2 className="student-details-report-heading">Student Details Report</h2>
      <table className="student-details-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email ID</th>
            <th>Marks</th>
            <th>Course</th>
            <th>Floor</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.studentDetails.studentName}</td>
              <td>{student.studentDetails.emailId}</td>
              <td>{student.studentDetails.marks}</td>
              <td>{student.courses.course}</td>
              <td>{student.floor}</td>
              <td>{student.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsReport;






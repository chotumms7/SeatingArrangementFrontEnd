import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllocatedList.css"; 

const AllocatedList = () => {
  const [allocatedList, setAllocatedList] = useState([]);

  useEffect(() => {
   
    fetchAllocatedList();
  }, []);

  const fetchAllocatedList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/blueprint/report");
      setAllocatedList(response.data);
    } catch (error) {
      console.error("Error fetching allocated list:", error);
    }
  };

  return (
    <div className="allocated-list-container">
      <h2>Allocated List</h2>
      <div className="allocated-table-container">
        <div className="allocated-table-scroll">
          <table className="allocated-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Email ID</th>
                <th>Marks</th>
                <th>Course</th>
                <th>Floor</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {allocatedList.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.studentName}</td>
                  <td>{student.emailId}</td>
                  <td>{student.marks}</td>
                  <td>{student.course}</td>
                  <td>{student.floor}</td>
                  <td>{student.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllocatedList;

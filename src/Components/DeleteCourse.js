
import React, { useState } from "react";
import axios from "axios";

const DeleteCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [deleteStatus, setDeleteStatus] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/courses/getByCourseName/${courseName}`
      );

      if (response.data.length === 0) {
        setDeleteStatus("No course found with the given name.");
        return;
      }

      const courseId = response.data[0].id;

      const deleteResponse = await axios.delete(
        `http://localhost:8080/courses/delete/${courseId}`
      );

      setDeleteStatus(deleteResponse.data);
    } catch (error) {
      console.error("Error deleting course:", error);
      setDeleteStatus("Invalid Course given.Please give proper course.");
    }
  };

  const handleChange = (event) => {
    setCourseName(event.target.value);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f2f2f2"
  };

  const formStyle = {
    backgroundColor: "#b2b1b1",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    textAlign: "center"
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s"
  };

  const statusStyle = {
    marginTop: "20px",
    color: "red"
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Delete Course</h2>
        <div>
          <label>Enter Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={handleChange}
            style={inputStyle}
          />
          <button onClick={handleDelete} style={buttonStyle}>
            Delete Course
          </button>
        </div>
        {deleteStatus && <div style={statusStyle}>{deleteStatus}</div>}
      </div>
    </div>
  );
};

export default DeleteCourse;

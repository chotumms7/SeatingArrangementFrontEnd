
import React, { useState } from "react";
import axios from "axios";
import "./CourseCreation.css";

const CourseCreation = () => {
  const [formData, setFormData] = useState({
    course: "",
    total_seats: "",
    no_of_seats_available: "",
    no_of_seats_alloted: "0",
    max_marks: "",
    min_marks: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/courses/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Course added successfully:", response.data);
       
        setFormData({
          course: "",
          total_seats: "",
          no_of_seats_available: "",
          no_of_seats_alloted: "",
          max_marks: "",
          min_marks: "",
        });
       
        setSuccessMessage("Course added successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error adding course:", error);
        
        setErrorMessage("Failed to add course. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="containercc">
      <div className="form-containercc">
        <h2>Add Course</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-groupcc">
            <label className="form-labelcc">Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter Course"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Total Seats:</label>
            <input
              type="number"
              name="total_seats"
              value={formData.total_seats}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter total seats"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Seats Available:</label>
            <input
              type="number"
              name="no_of_seats_available"
              value={formData.no_of_seats_available}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter Seats Available"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Seats Allotted:</label>
            <input
              type="number"
              name="no_of_seats_alloted"
              value={formData.no_of_seats_alloted}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter Seats Allotted"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Max Marks:</label>
            <input
              type="number"
              name="max_marks"
              value={formData.max_marks}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter Max Marks"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Min Marks:</label>
            <input
              type="number"
              name="min_marks"
              value={formData.min_marks}
              onChange={handleFormChange}
              className="form-inputcc"
              placeholder="Enter Min Marks"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary submit-buttoncc">
            Add Course
          </button>
        </form>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="success-messagecc">
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default CourseCreation;

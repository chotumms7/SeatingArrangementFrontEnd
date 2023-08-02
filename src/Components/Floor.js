import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Floor.css"; 

const Floor = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
   
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/courses/getAll");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  return (
    <div className="floor-container">
      <h2>Floor</h2>
      <table className="table table-bordered mt-3 floor-table-courses">
        <thead>
          <tr>
            <th>ID</th>
            <th>Branch</th>
            <th>Total Seats</th>
            <th>Seats Available</th>
            <th>Seats Allotted</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.course}</td>
              <td>{course.total_seats}</td>
              <td>{course.no_of_seats_available}</td>
              <td>{course.no_of_seats_alloted}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row">
        <div className="col-md-6">
          <Link
            to="/floor1"
            className="card floor-card"
            style={{
              backgroundColor: "#BEBDB8",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 className="floor-text">Floor 1</h3>
          
          </Link>
        </div>
        <div className="col-md-6">
          <Link
            to="/floor2"
            className="card floor-card"
            style={{
              backgroundColor: "#BEBDB8",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h3 className="floor-text">Floor 2</h3>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Floor;


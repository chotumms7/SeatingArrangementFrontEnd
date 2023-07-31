
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Floor1.css"; // Import the CSS file for styling

const Floor1 = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  const navigate = useNavigate();

  const handleCourseCardClick = async (courseName) => {
    try {
      const response = await axios.get(`http://localhost:8080/courses/getByCourseName/${courseName}`);
      setSelectedCourse(response.data[0]);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  const handleAllocateButtonClick = () => {
    if (selectedCourse.no_of_seats_available > 0) {
      // Implement the logic to allocate the course here
      console.log("Allocate button clicked for course:", selectedCourse.course);
      
      navigate("/studentdetailsform", {
        state: {
          selectedCourse,
          floor: "1"
         
        },
      });
    } else {
      alert("No seats available for allocation.");
    }
  };

  return (
    <div className="floor1-container">
      <div className="floor1-heading">
        <h2>Floor 1</h2>
      </div>
      <div className="row">
        {courses.slice(0, Math.ceil(courses.length / 2)).map((course) => (
          <div
            key={course.id}
            className="col-md-4"
            style={{ marginBottom: "20px" }}
          >
            <div
              className="card floor1-card"
              onClick={() => handleCourseCardClick(course.course)}
            >
              <h3>{course.course}</h3>
            
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="course-information">
          <h2>Course Information</h2>
          <p>ID: {selectedCourse.id}</p>
          <p>Branch: {selectedCourse.course}</p>
          <p>Total Seats: {selectedCourse.total_seats}</p>
          <p>Seats Available: {selectedCourse.no_of_seats_available}</p>
          <p>Seats Allotted: {selectedCourse.no_of_seats_alloted}</p>
          
          <button
            className="allocate-button"
            onClick={handleAllocateButtonClick}
            disabled={selectedCourse.no_of_seats_available === 0} // Disable button if seats available is 0
          >
            Allocate
          </button>
        </div>
      )}
    </div>
  );
};

export default Floor1;


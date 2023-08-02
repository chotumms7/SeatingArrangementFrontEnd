
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Floor2.css"; 

const Floor2 = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  const handleAllocateButtonClick = () => {
    
    console.log("Allocate button clicked for course:", selectedCourse.course);
    
    navigate("/studentdetailsform", {
      state: {
        selectedCourse,
        floor: "2"
       
      },
    });
  };

  return (
    <div className="floor2-container">
     
      <div className="floor2-heading">
        <h2>Floor 2</h2>
      </div>

      <div className="row">
        {courses.slice(Math.ceil(courses.length / 2)).map((course) => (
          <div
            key={course.id}
            className="col-md-4"
            style={{ marginBottom: "20px" }}
          >
            <div
              className="card floor2-card"
              style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}
              onClick={() => handleCourseCardClick(course.course)}
            >
              <h3>{course.course}</h3>
             
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="course-information">
          <h2>Course Information</h2>
          <div className="course-info-details">
            <p>ID: {selectedCourse?.id}</p>
            <p>Branch: {selectedCourse?.course}</p>
            <p>Total Seats: {selectedCourse?.total_seats}</p>
            <p>Seats Available: {selectedCourse?.no_of_seats_available}</p>
            <p>Seats Allotted: {selectedCourse?.no_of_seats_alloted}</p>
           
            <button
              className="allocate-button"
              onClick={handleAllocateButtonClick}
              disabled={selectedCourse?.no_of_seats_available === 0} 
            >
              Allocate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Floor2;



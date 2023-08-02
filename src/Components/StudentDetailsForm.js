import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StudentDetailsForm.css"; 

const StudentDetailsForm = ({ selectedCourse, floor }) => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    email: "",
    marks: "",
    course: selectedCourse.course,
    floor: floor,
    room: selectedCourse.id 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isMarksInRange = () => {
    const marks = parseInt(studentData.marks);
    return marks >= selectedCourse.min_marks && marks <= selectedCourse.max_marks;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isMarksInRange()) {
      alert(
        "Invalid marks! Marks should be within the range of " +
          selectedCourse.min_marks +
          " and " +
          selectedCourse.max_marks
      );
      return;
    }

    
    console.log("Student Data:", studentData);
    
    setStudentData({
      studentName: "",
      email: "",
      marks: "",
      course: selectedCourse.course,
      floor: floor,
      room: selectedCourse.id
    });

    let blueprintObj = {
      floor: floor,
      room: selectedCourse.id,
      courses: {
        course: selectedCourse.course
      },
      studentDetails: {
        studentName: studentData.studentName,
        emailId: studentData.email,
        marks: studentData.marks
      }
    };

    try {
      await axios.post("http://localhost:8080/blueprint/adding", blueprintObj, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      navigate("/studentdetailsreport");
    } catch (error) {
      console.error("Error submitting student details:", error);
    }
  };

  return (
    <div className="student-details-form-container">
      <div className="form-scroll-container">
        <div className="student-details-form">
          <h2>Student Details Form</h2>
          <form onSubmit={handleSubmit}>
           
            <div>
              <label>Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={studentData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Marks:</label>
              <input
                type="number"
                name="marks"
                value={studentData.marks}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Course:</label>
              <input
                type="text"
                name="course"
                value={studentData.course}
                onChange={handleChange}
                required
                disabled 
              />
            </div>
            <div>
              <label>Floor:</label>
              <input
                type="text"
                name="floor"
                value={studentData.floor}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Room:</label>
              <input
                type="text"
                name="room"
                value={studentData.room}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsForm;






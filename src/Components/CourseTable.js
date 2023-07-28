// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./CourseTable.css"; // Import the custom CSS file for styling

// // const CourseTable = () => {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     // Make the API call to fetch course data from the backend
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/courses/getAll");
// //         setCourses(response.data);
// //       } catch (error) {
// //         console.error("Error fetching courses:", error);
// //       }
// //     };
// //     fetchCourses();
// //   }, []);

// //   return (
// //     <div className="container mt-5 course-table-container">
// //       <h2 className="text-center mb-4">Courses And Seats</h2>
// //       <table className="table table-bordered table-striped">
// //         <thead className="thead-dark">
// //           <tr>
// //             <th>ID</th>
// //             <th>Course</th>
// //             <th>Total Seats</th>
// //             <th>No of Seats Available</th>
// //             <th>No of Seats Allotted</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {courses.map((response) => (
// //             <tr key={response.id}>
// //               <td>{response.id}</td>
// //               <td>{response.course}</td>
// //               <td>{response.total_seats}</td>
// //               <td>{response.no_of_seats_available}</td>
// //               <td>{response.no_of_seats_alloted}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default CourseTable;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./CourseTable.css"; // Import the custom CSS file for styling

// // const CourseTable = () => {
// //   const [courses, setCourses] = useState([]);
// //   const [studentName, setStudentName] = useState("");
// //   const [marks, setMarks] = useState("");

// //   useEffect(() => {
// //     // Make the API call to fetch course data from the backend
// //     const fetchCourses = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/courses/getAll");
// //         setCourses(response.data);
// //       } catch (error) {
// //         console.error("Error fetching courses:", error);
// //       }
// //     };
// //     fetchCourses();
// //   }, []);

// //   const handleFormChange = (event) => {
// //     const { name, value } = event.target;
// //     if (name === "studentName") {
// //       setStudentName(value);
// //     } else if (name === "marks") {
// //       setMarks(value);
// //     }
// //   };

// //   const handleFormSubmit = (event) => {
// //     event.preventDefault();
// //     // Do something with the form data, e.g., make an API call to submit the student details
// //     console.log("Student Name:", studentName);
// //     console.log("Marks:", marks);
// //     // Reset form fields after submission
// //     setStudentName("");
// //     setMarks("");
// //   };

// //   return (
// //     <div className="container mt-5 course-table-container">
// //       <h2 className="text-center mb-4">Courses And Seats</h2>
// //       <table className="table table-bordered table-striped">
// //         <thead className="thead-dark">
// //           <tr>
// //             <th>ID</th>
// //             <th>Course</th>
// //             <th>Total Seats</th>
// //             <th>No of Seats Available</th>
// //             <th>No of Seats Allotted</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {courses.map((response) => (
// //             <tr key={response.id}>
// //               <td>{response.id}</td>
// //               <td>{response.course}</td>
// //               <td>{response.total_seats}</td>
// //               <td>{response.no_of_seats_available}</td>
// //               <td>{response.no_of_seats_alloted}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <div className="form-container">
// //         <h3>Enter Student Details:</h3>
// //         <form onSubmit={handleFormSubmit}>
// //           <div className="form-group">
// //             <label className="form-label">Student Name:</label>
// //             <input
// //               type="text"
// //               name="studentName"
// //               value={studentName}
// //               onChange={handleFormChange}
// //               className="form-input"
// //               placeholder="Enter Student Name"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label className="form-label">Marks:</label>
// //             <input
// //               type="text"
// //               name="marks"
// //               value={marks}
// //               onChange={handleFormChange}
// //               className="form-input"
// //               placeholder="Enter Marks"
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary submit-button">
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseTable;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./CourseTable.css"; // Import the custom CSS file for styling

// const CourseTable = () => {
//   const [courses, setCourses] = useState([]);
//   const [studentName, setStudentName] = useState("");
//   const [marks, setMarks] = useState("");

//   useEffect(() => {
//     // Make the API call to fetch course data from the backend
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/courses/getAll");
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleFormChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "studentName") {
//       setStudentName(value);
//     } else if (name === "marks") {
//       setMarks(value);
//     }
//   };

//   const calculateAllocationChance = (course) => {
//     if (course.min_marks && course.max_marks) {
//       const minMarks = parseInt(course.min_marks, 10);
//       const maxMarks = parseInt(course.max_marks, 10);
//       const studentMarks = parseInt(marks, 10);
//       if (!isNaN(minMarks) && !isNaN(maxMarks) && !isNaN(studentMarks)) {
//         // Calculate the allocation chance based on the entered marks
//         const range = maxMarks - minMarks;
//         const marksAboveMin = studentMarks - minMarks;
//         const chance = (marksAboveMin / range) * 100;
//         let percent = chance.toFixed(0);
//         if(percent<0){
//             percent = 0;
//         }
//         return percent + "%";
//       }
//     }
//     return "-";
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the form data, e.g., make an API call to submit the student details
//     console.log("Student Name:", studentName);
//     console.log("Marks:", marks);
//     // Reset form fields after submission
//     setStudentName("");
//     setMarks("");
//   };

//   return (
//     <div className="container mt-5 course-table-container">
//       <h2 className="text-center mb-4">Courses And Seats</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Course</th>
//             <th>Total Seats</th>
//             <th>No of Seats Available</th>
//             <th>No of Seats Allotted</th>
//             <th>Chance of Allocation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((response) => (
//             <tr key={response.id}>
//               <td>{response.id}</td>
//               <td>{response.course}</td>
//               <td>{response.total_seats}</td>
//               <td>{response.no_of_seats_available}</td>
//               <td>{response.no_of_seats_alloted}</td>
//               <td>{calculateAllocationChance(response)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="form-container">
//         <h3>Enter Marks and get chance of allocation:</h3>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <label className="form-label">Student Name:</label>
//             <input
//               type="text"
//               name="studentName"
//               value={studentName}
//               onChange={handleFormChange}
//               className="form-input"
//               placeholder="Enter Student Name"
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">Marks:</label>
//             <input
//               type="text"
//               name="marks"
//               value={marks}
//               onChange={handleFormChange}
//               className="form-input"
//               placeholder="Enter Marks (Out of 1000)"
//             />
//           </div>
//           {/* <button type="submit" className="btn btn-primary submit-button">
//             Submit
//           </button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CourseTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CourseTable.css"; // Import the custom CSS file for styling

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [marks, setMarks] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Make the API call to fetch course data from the backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses/getAll");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    if (name === "studentName") {
      setStudentName(value);
    } else if (name === "marks") {
      setMarks(value);
    }
  };

  const calculateAllocationChance = (course) => {
    if (course.min_marks && course.max_marks) {
      const minMarks = parseInt(course.min_marks, 10);
      const maxMarks = parseInt(course.max_marks, 10);
      const studentMarks = parseInt(marks, 10);
      if (!isNaN(minMarks) && !isNaN(maxMarks) && !isNaN(studentMarks)) {
        // Calculate the allocation chance based on the entered marks
        const range = maxMarks - minMarks;
        const marksAboveMin = studentMarks - minMarks;
        let chance = (marksAboveMin / range) * 100;
        // Ensure chance does not exceed 100%
        chance = Math.min(chance, 100);
        let percent = chance.toFixed(0);
        if (percent < 0) {
          percent = 0;
        }
        return percent + "%";
      }
    }
    return "-";
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Student Name:", studentName);
    console.log("Marks:", marks);
    // Reset form fields after submission
    setStudentName("");
    setMarks("");
  };

  const handleLogout = () => {
    navigate("/main");
  };

  return (
    <div className="container mt-5 course-table-container">
      <div className="top-right">
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
      <h2 className="text-center mb-4">Courses And Seats</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Total Seats</th>
            <th>No of Seats Available</th>
            <th>No of Seats Allotted</th>
            <th>Chance of Allocation</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((response) => (
            <tr key={response.id}>
              <td>{response.id}</td>
              <td>{response.course}</td>
              <td>{response.total_seats}</td>
              <td>{response.no_of_seats_available}</td>
              <td>{response.no_of_seats_alloted}</td>
              <td>{calculateAllocationChance(response)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h3>Enter Marks and get chance of allocation:</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Marks:</label>
            <input
              type="text"
              name="marks"
              value={marks}
              onChange={handleFormChange}
              className="form-input"
              placeholder="Enter Marks (Out of 1000)"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseTable;


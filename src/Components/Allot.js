
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Allot.css"; // Import the custom CSS file for allot page styling

// const Allot = () => {
//   const [data, setData] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     studentName: "",
//     email: "",
//     branch: "",
//     marks: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");

//   useEffect(() => {
//     // Make an API call to fetch data from the backend
//     axios
//       .get("http://localhost:8080/courses/getAll")
//       .then((response) => {
//         setData(response.data); // Set the data received from the backend
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleAllocate = (id) => {
//     // Implement your allocate functionality here based on the id
//     console.log(`Allocating seats for ID ${id}`);
//     setShowForm(true);
//   };

//   const handleFormChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Process form data here and send it to the backend
//     axios
//       .post("http://localhost:8080/studentdetails/add", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("Student details submitted successfully:", response.data);
//         setShowForm(false); // Hide the form after successful submission
//         // Fetch the updated data from the backend after successful submission
//         axios
//           .get("http://localhost:8080/courses/getAll")
//           .then((response) => {
//             setData(response.data); // Set the updated data received from the backend
//           })
//           .catch((error) => {
//             console.error("Error fetching updated data:", error);
//           });
//         // Show success message
//         setSuccessMessage(`${formData.studentName} is allocated to ${formData.branch}.`);
//         navigate("/studentreport");
//       })
//       .catch((error) => {
//         if (error.response && error.response.status === 500) {
//           // Check if the error response contains a message about seats being full
//           if (error.response.data && error.response.data.message === "Branch is full. Cannot add more students.") {
//             // Show an error message to the user
//             alert("Seats are full for this branch. Please choose another branch.");
//           }
//         } else {
//           console.error("Error submitting student details:", error);
//         }
//       });
//   };

//   return (
//     <div className="container mt-4 allot-page">
//       <h2>Seat Allocation</h2>
//       <table className="allot-table">
//         <thead>
//           <tr>
//             <th className="thStyle">ID</th>
//             <th className="thStyle">Branch</th>
//             <th className="thStyle">Seats Available</th>
//             <th className="thStyle">Seats Allotted</th>
//             <th className="thStyle">Allocate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((response) => (
//             <tr key={response.id}>
//               <td className="tdStyle">{response.id}</td>
//               <td className="tdStyle">{response.course}</td>
//               <td className="tdStyle">{response.no_of_seats_available}</td>
//               <td className="tdStyle">{response.no_of_seats_alloted}</td>
//               <td className="tdStyle">
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => handleAllocate(response.id)}
//                   disabled={response.no_of_seats_available === 0} // Disable button if seats available is 0
//                 >
//                   Allocate
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showForm && (
//         <div className="form-container">
//           <h3>Enter Student Details:</h3>
//           <form style={{ width: "50%" }} onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label className="form-label">Student Name:</label>
//               <input
//                 type="text"
//                 name="studentName"
//                 value={formData.studentName}
//                 onChange={handleFormChange}
//                 className="form-input"
//                 placeholder="Enter Student Name"
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Email:</label>
//               <input
//                 type="text"
//                 name="emailId"
//                 value={formData.emailId}
//                 onChange={handleFormChange}
//                 className="form-input"
//                 placeholder="Enter Email"
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Branch:</label>
//               <input
//                 type="text"
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleFormChange}
//                 className="form-input"
//                 placeholder="Enter Branch"
//               />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Marks:</label>
//               <input
//                 type="text"
//                 name="marks"
//                 value={formData.marks}
//                 onChange={handleFormChange}
//                 className="form-input"
//                 placeholder="Enter Marks"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//       {successMessage && (
//         <div className="alert alert-success mt-3" role="alert">
//           {successMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Allot;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Allot.css"; // Import the custom CSS file for allot page styling

const Allot = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    branch: "",
    marks: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Make an API call to fetch data from the backend
    axios
      .get("http://localhost:8080/courses/getAll")
      .then((response) => {
        setData(response.data); // Set the data received from the backend
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAllocate = (id) => {
    // Find the selected course by its ID
    const selectedCourse = data.find((course) => course.id === id);
    // Update the formData with the branch value from the selected course
    setFormData((prevFormData) => ({
      ...prevFormData,
      branch: selectedCourse ? selectedCourse.course : "",
    }));
    // Show the student details form
    setShowForm(true);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Process form data here and send it to the backend
    axios
      .post("http://localhost:8080/studentdetails/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Student details submitted successfully:", response.data);
        setShowForm(false); // Hide the form after successful submission
        // Fetch the updated data from the backend after successful submission
        axios
          .get("http://localhost:8080/courses/getAll")
          .then((response) => {
            setData(response.data); // Set the updated data received from the backend
          })
          .catch((error) => {
            console.error("Error fetching updated data:", error);
          });
        // Show success message
        setSuccessMessage(`${formData.studentName} is allocated to ${formData.branch}.`);
        navigate("/studentreport");
      })
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          // Check if the error response contains a message about seats being full
          if (error.response.data && error.response.data.message === "Branch is full. Cannot add more students.") {
            // Show an error message to the user
            alert("Seats are full for this branch. Please choose another branch.");
          }
        } else {
          console.error("Error submitting student details:", error);
        }
      });
  };

  return (
    <div className="container mt-4 allot-page">
      <h2>Seat Allocation</h2>
      <table className="allot-table">
        <thead>
          <tr>
            <th className="thStyle">ID</th>
            <th className="thStyle">Branch</th>
            <th className="thStyle">Seats Available</th>
            <th className="thStyle">Seats Allotted</th>
            <th className="thStyle">Allocate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((response) => (
            <tr key={response.id}>
              <td className="tdStyle">{response.id}</td>
              <td className="tdStyle">{response.course}</td>
              <td className="tdStyle">{response.no_of_seats_available}</td>
              <td className="tdStyle">{response.no_of_seats_alloted}</td>
              <td className="tdStyle">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAllocate(response.id)}
                  disabled={response.no_of_seats_available === 0} // Disable button if seats available is 0
                >
                  Allocate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && (
        <div className="form-container">
          <h3>Enter Student Details:</h3>
          <form style={{ width: "50%" }} onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Enter Student Name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input
                type="text"
                name="emailId"
                value={formData.emailId}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Branch:</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Enter Branch"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Marks:</label>
              <input
                type="text"
                name="marks"
                value={formData.marks}
                onChange={handleFormChange}
                className="form-input"
                placeholder="Enter Marks"
              />
            </div>
            <button type="submit" className="btn btn-primary submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success mt-3" role="alert">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Allot;

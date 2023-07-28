import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const StudentLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/student/login/${username}/${password}`
      );

      // If login is successful, redirect the student to the appropriate page
      if (response.data) {
        navigate("/coursetable");
        console.log("Login successful!");
      } else {
        // If the backend returns an error, display an error message
        setErrorMessage("Incorrect username or password");
      }
    } catch (error) {
      // If there's an error with the API call, display an error message
      console.error("Error logging in:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card card-custom"
            style={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <h2
                className="card-title text-center"
                style={{ fontSize: "24px", fontWeight: "bold", color: "#333333" }}
              >
                Student Login
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {errorMessage}
                </div>
              )}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    fontSize: "18px",
                    transition: "background-color 0.3s",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <Link to="/">Back to Main</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

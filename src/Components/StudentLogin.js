import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css"; 

const StudentLogin = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/student/login/${loginUsername}/${loginPassword}`
      );

      if (response.data) {
        navigate("/coursetable");
        console.log("Login successful!");
      } else {
        setLoginErrorMessage("Incorrect username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/student/add", {
        username: registerUsername,
        password: registerPassword,
      });

      setRegisterSuccessMessage("Registered successfully!");
      setRegisterUsername("");
      setRegisterPassword("");
    } catch (error) {
      console.error("Error registering student:", error);
      setRegisterSuccessMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="student-login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Login form */}
          <div className="login-title">Student Login</div>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={loginUsername}
                onChange={(event) => setLoginUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
              />
            </div>
            {loginErrorMessage && <div className="error-message">{loginErrorMessage}</div>}
            <div className="d-flex justify-content-center">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="register-card">
          {/* Register form */}
          <div className="register-title">Student Registration</div>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                value={registerUsername}
                onChange={(event) => setRegisterUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={registerPassword}
                onChange={(event) => setRegisterPassword(event.target.value)}
              />
            </div>
            {registerSuccessMessage && <div className="success-message">{registerSuccessMessage}</div>}
            <div className="d-flex justify-content-center">
              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;


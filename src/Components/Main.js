
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import homepage22 from "./Images/homepage22.jpg";

const Main = () => {
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
    justifyContent: "center",
    minHeight: "100vh",
    background: `url(${homepage22})`, 
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "20px",
  };

  const mainTitleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000000", 
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", 
  };

  const mainLinksStyle = {
    display: "flex",
    flexDirection: "column", 
    alignItems: "flex-start", 
  };

  const mainLinkStyle = {
    padding: "12px 24px",
    margin: "10px",
    border: "2px solid #ffffff", 
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#ffffff", 
    transition: "all 0.3s ease",
    background: "#454545", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="container-fluid" style={mainContainerStyle}>
      <h1 className="display-4" style={mainTitleStyle}>
        Seating Arrangement System
      </h1>
      <div style={mainLinksStyle}>
        <Link
          to="/gallery"
          className="btn btn-primary btn-lg mb-3"
          style={mainLinkStyle}
        >
          Gallery
        </Link>
        <Link
          to="/login"
          className="btn btn-primary btn-lg mb-3"
          style={mainLinkStyle}
        >
          Admin Login
        </Link>
        <Link
          to="/studentlogin"
          className="btn btn-primary btn-lg"
          style={mainLinkStyle}
        >
          Student Login
        </Link>
      </div>
    </div>
  );
};

export default Main;


import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import homepage22 from "./Images/homepage22.jpg";

const Main = () => {
  const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align the content to the left side
    justifyContent: "center",
    minHeight: "100vh",
    background: `url(${homepage22})`, // Set the background image
    backgroundSize: "100% 100%", // Stretch the image to cover the container
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "20px",
  };

  const mainTitleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000000", // Set the text color to blue (#007bff) for CMR Institutions text
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)", // Add a subtle text shadow
  };

  const mainLinksStyle = {
    display: "flex",
    flexDirection: "column", // Align the buttons in a column
    alignItems: "flex-start", // Align the buttons to the left side
  };

  const mainLinkStyle = {
    padding: "12px 24px",
    margin: "10px",
    border: "2px solid #ffffff", // Set the border color to white
    borderRadius: "5px",
    fontSize: "18px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#ffffff", // Set the text color to white
    transition: "all 0.3s ease",
    background: "#454545", // Make the background transparent
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const mainLinkHoverStyle = {
    backgroundColor: "#ffffff",
    color: "#007bff", // Set the text color to the primary color (#007bff) on hover
  };

  return (
    <div className="container-fluid" style={mainContainerStyle}>
      <h1 className="display-4" style={mainTitleStyle}>
        CMR Institutions
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

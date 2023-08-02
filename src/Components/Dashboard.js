
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container mt-5" style={{ background: "#D9DDDC", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="col-md-6">
        <div
          className="dashboard-card"
          style={{
            backgroundColor: "#BEBDB8",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <h2
              className="dashboard-title text-center"
              style={{ fontSize: "24px", fontWeight: "bold", color: "#3E424B" }}
            >
              Dashboard
            </h2>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link
              to="/floor" 
              className="btn btn-primary btn-block dashboard-btn"
              style={{
                backgroundColor: "#877F7D",
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
              Blueprint
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link
              to="/coursecreation"
              className="btn btn-primary btn-block dashboard-btn"
              style={{
                backgroundColor: "#877F7D",
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
              Add Course
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link
              to="/deletecourse" 
              className="btn btn-danger btn-block dashboard-btn"
              style={{
                backgroundColor: "#D9534F",
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
              Delete Course
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link
              to="/allocatedlist" 
              className="btn btn-primary btn-block dashboard-btn"
              style={{
                backgroundColor: "#877F7D",
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
              Allocated List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;












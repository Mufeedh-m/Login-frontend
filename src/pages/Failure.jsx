import React from "react";
import "./Failure.css";

function Failure() {
  return (
    <div className="failure-container">
      <div className="failure-card">
        <h1 className="failure-title">❌ Login Failed!</h1>
        <p className="failure-message">
          Invalid username or password. Please try again.
        </p>
      
      </div>
    </div>
  );
}

export default Failure;



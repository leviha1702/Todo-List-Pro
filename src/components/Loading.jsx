import React from "react";
import "../styles/loadingSpinner.css"; // Ensure you have this CSS file for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

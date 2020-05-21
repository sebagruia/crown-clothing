// This is the Loading Component
import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner = () => {
  return (
    <div className="spinnerOverlay">
      <div className="spinnerContainer"></div>
    </div>
  );
};

export default WithSpinner;

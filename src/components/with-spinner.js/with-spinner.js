// This is the Loading Component

import React from "react";
import "./with-spinner.styles.scss";

//This is a hihgh order component because it takes as argument another component
const WithSpinner = (WrappedComponet) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinnerOverlay">
      <div className="spinnerContainer"></div>
    </div>
  ) : (
    <WrappedComponet {...otherProps} />
  );
};

export default WithSpinner;

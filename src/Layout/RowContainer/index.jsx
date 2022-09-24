import React, { Children } from "react";

function RowContainer({ children }) {
  return (
    <div className="row-scroll-wrapper">
      <div className="row-container">{children}</div>
    </div>
  );
}

export default RowContainer;

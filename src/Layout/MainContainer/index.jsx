import React from "react";

function MainContainer({ children }) {
  return (
    <div className="main-scroll-wrapper">
      <div className="main-container">{children}</div>
    </div>
  );
}

export default MainContainer;

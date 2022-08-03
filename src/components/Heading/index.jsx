import React from "react";

function Heading({ size, children, className }) {
  switch (size) {
    case 6:
      return <h6 className={`${className ? className : ""}`}>{children}</h6>;
    case 5:
      return <h5 className={`${className ? className : ""}`}>{children}</h5>;
    case 4:
      return <h4 className={`${className ? className : ""}`}>{children}</h4>;
    case 3:
      return <h3 className={`${className ? className : ""}`}>{children}</h3>;
    case 2:
      return <h2 className={`${className ? className : ""}`}>{children}</h2>;
    case 1:
      return <h1 className={`${className ? className : ""}`}>{children}</h1>;
    default:
      return <h1 className={`${className ? className : ""}`}>{children}</h1>;
  }
}

export default Heading;

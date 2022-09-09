import React from "react";

function ListItem({ children, className }) {
  return <li className={className}>{children}</li>;
}

export default ListItem;

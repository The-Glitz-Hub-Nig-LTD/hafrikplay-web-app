import React from "react";
import { Link } from "react-router-dom";

import Icon from "../Icon";
import ListItem from "../ListItem";

function SideBarTab({ route, name, iconName, iconSize, iconClass }) {
  return (
    <Link to={`${route ? route : ""}`}>
      <ListItem className="sidebar__item">
        <Icon className={iconClass} size={iconSize} name={iconName} />
        <span>{name}</span>
      </ListItem>
    </Link>
  );
}

export default SideBarTab;

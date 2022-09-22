import React from "react";
import Icon from "../Icon";

import userAvatar from "../../assets/user-avatar.png";
import { Avatar } from "@nextui-org/react";

function MainNav() {
  return (
    <div className="main-nav">
      <form action="" className="main-nav__form">
        <fieldset className="main-nav__fieldset">
          <Icon className="icon" name="search-normal" size={20} />

          <div className="main-nav__form-group">
            <label htmlFor="searchbar"></label>
            <input
              type="search"
              placeholder="Search songs, artists, and albums"
              id="search"
              name="search"
            />
          </div>
        </fieldset>
      </form>

      <div className="main-nav__group">
        <div className="user-profile dropdown-menu">
          <span className="user-name">Whitegod</span>
          <div className="user-avatar">
            <Avatar src={userAvatar} alt="user profile" size={24} />
          </div>
          <Icon className="icon rotate-180" name="arrow-down" size={20} />
        </div>

        <div className="divider"></div>

        <div className="notifications">
          <Icon className="icon" name="notification" size={20} />
        </div>
      </div>
    </div>
  );
}

export default MainNav;

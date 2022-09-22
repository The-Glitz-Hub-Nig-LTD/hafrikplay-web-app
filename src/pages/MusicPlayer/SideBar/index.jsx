import React from "react";
import { useMatch } from "react-router-dom";

import logo from "../../../assets/logo-white.svg";

import Heading from "../../../components/Heading";
import List from "../../../components/List";
import SideBarTab from "../../../components/SideBarTab";

function SideBar() {
  // const match = useMatch();
  return (
    <aside className="music-player__sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="Hafrikplay logo" />
      </div>

      <div className="sidebar__container">
        <div className="sidebar__group">
          <Heading size={5}>Music</Heading>
          <List className="sidebar__list">
            <SideBarTab
              route="#"
              name="Home"
              iconClass="icon__primary"
              iconSize={20}
              iconName="home"
            />

            <SideBarTab
              route="/trending"
              name="Trending"
              iconClass="icon__primary"
              iconSize={20}
              iconName="trend-up"
            />

            <SideBarTab
              route="/top-music"
              name="Top Music"
              iconClass="icon__primary"
              iconSize={20}
              iconName="musicnote"
            />

            <SideBarTab
              route="/blog"
              name="Blog"
              iconClass="icon__primary"
              iconSize={20}
              iconName="blog"
            />

            <SideBarTab
              route="/discover"
              name="Discover"
              iconClass="icon__primary"
              iconSize={20}
              iconName="discover"
            />

            <SideBarTab
              route="/genres"
              name="Genres"
              iconClass="icon__primary"
              iconSize={20}
              iconName="elementsvg"
            />

            <SideBarTab
              route="/albums"
              name="Albums"
              iconClass="icon__primary"
              iconSize={20}
              iconName="music-circle"
            />
          </List>
        </div>

        <div className="sidebar__group">
          <Heading size={5}>My Library</Heading>
          <List className="sidebar__list">
            <SideBarTab
              route="browse-feed"
              name="Browse Feed"
              iconClass="icon__primary"
              iconSize={20}
              iconName="browse"
            />

            <SideBarTab
              route="/playlist"
              name="Playlist"
              iconClass="icon__primary"
              iconSize={20}
              iconName="music-playlist"
            />

            <SideBarTab
              route="/uploads"
              name="Uploads"
              iconClass="icon__primary"
              iconSize={20}
              iconName="cloud-plus"
            />
          </List>
        </div>

        <div className="sidebar__group">
          <Heading size={5}>Events</Heading>
          <List className="sidebar__list">
            <SideBarTab
              route="/events"
              name="Events"
              iconClass="icon__primary"
              iconSize={20}
              iconName="calendar"
            />
          </List>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;

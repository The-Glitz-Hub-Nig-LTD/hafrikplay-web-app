import React from "react";

import SideBar from "./SideBar";
import Main from "./Main";
import Controls from "./Controls";
import { Outlet } from "react-router-dom";

function MusicPlayer() {
  return (
    <div className="music-player">
      <SideBar />
      <Main>
        <Outlet />
      </Main>
      <Controls />
    </div>
  );
}

export default MusicPlayer;

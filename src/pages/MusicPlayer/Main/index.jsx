import React, { Children } from "react";
import { Route, Routes } from "react-router-dom";

import Trending from "../Trending/index.";

function Main({ children }) {
  return <main className="music-player__main">{children}</main>;
}

export default Main;

import React from "react";

import SideBar from "./SideBar";
import Main from "./Main";
import Controls from "./Controls";
import { Outlet } from "react-router-dom";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import ProfileCard from "../../components/ProfileCard";

import MainNav from "../../components/MainNav";
import MainContainer from "../../Layout/MainContainer";
import TopContentCarousel from "../../components/TopContentCarousel";
import RowContainer from "../../Layout/RowContainer";

import cardImg from "../../assets/card-img.png";
import cardImg01 from "../../assets/card-img-01.png";
import cardImg02 from "../../assets/card-img-02.png";
import cardImg03 from "../../assets/card-img-03.png";
import cardImg04 from "../../assets/card-img-04.png";

function MusicPlayer() {
  return (
    <div className="music-player">
      <SideBar />

      <Main>
        <MainNav />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Main>

      <Controls />
    </div>
  );
}

export default MusicPlayer;

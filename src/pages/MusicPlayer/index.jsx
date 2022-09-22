import React from "react";

import SideBar from "./SideBar";
import Main from "./Main";
import Controls from "./Controls";
import { Outlet } from "react-router-dom";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import ProfileCard from "../../components/ProfileCard";

import MainNav from "../../components/MainNav";
import MainContainer from "../../components/MainContainer";
import TopContentCarousel from "../../components/TopContentCarousel";
import RowContainer from "../../Layout/RowContainer";

function MusicPlayer() {
  return (
    <div className="music-player">
      <SideBar />
      <Main>
        <MainNav />

        {/* MainContainer */}
        <MainContainer>
          <TopContentCarousel />

          {/* Row content carousel */}

          <RowContainer>
            <Card cardStyle="overlay" playIcon />

            <Card cardStyle="normal" explictContent />
            <Card cardStyle="overlay" />
          </RowContainer>
        </MainContainer>

        {/* <div className="row">
          <Card cardStyle="overlay" playIcon />

          <Card cardStyle="normal" explictContent />
          <Card cardStyle="overlay" />
          <Card
            cardStyle="overlay"
            playIcon
            icon={
              <div className="card__icon card__icon--left">
                <Icon className="icon" name="headphone" size={16} />

                <span className="icon--meta text--tiny">234</span>
              </div>
            }
          />

          <Card
            explictContent
            type="playlist"
            cardStyle="normal"
            playIcon
            icon={
              <div className="card__icon card__icon--left">
                <Icon className="icon" name="headphone" size={16} />

                <span className="icon--meta text--tiny">234</span>
              </div>
            }
          />

          <ProfileCard />
        </div> */}
      </Main>
      <Controls />
    </div>
  );
}

export default MusicPlayer;

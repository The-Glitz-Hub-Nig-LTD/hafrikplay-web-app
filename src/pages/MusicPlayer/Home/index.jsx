import React from "react";
import Card from "../../../components/Card";

import TopContentCarousel from "../../../components/TopContentCarousel";
import RowContainer from "../../../Layout/RowContainer";
import ProfileCard from "../../../components/ProfileCard";

import cardImg from "../../../assets/card-img.png";
import cardImg01 from "../../../assets/card-img-01.png";
import cardImg02 from "../../../assets/card-img-02.png";
import cardImg03 from "../../../assets/card-img-03.png";
import cardImg04 from "../../../assets/card-img-04.png";
import Icon from "../../../components/Icon";

function Home() {
  return (
    <>
      <TopContentCarousel />

      <RowContainer>
        <Card
          cardStyle="normal"
          hover
          playIcon
          explictContent
          imageUrl={cardImg}
        />
        <Card cardStyle="overlay" hover playIcon imageUrl={cardImg01} />
        <Card cardStyle="overlay" hover playIcon imageUrl={cardImg02} />
        <Card cardStyle="overlay" hover imageUrl={cardImg03} />
        <Card cardStyle="overlay" imageUrl={cardImg04} />
        <Card cardStyle="overlay" imageUrl={cardImg} />
        <Card cardStyle="overlay" imageUrl={cardImg03} />
        <Card cardStyle="overlay" imageUrl={cardImg02} />
      </RowContainer>

      <RowContainer>
        <Card cardStyle="overlay" playIcon imageUrl={cardImg02} />
        <Card cardStyle="overlay" playIcon imageUrl={cardImg01} />
        <Card cardStyle="overlay" imageUrl={cardImg04} />
        <Card cardStyle="overlay" imageUrl={cardImg} />
        <Card cardStyle="normal" imageUrl={cardImg03} />
        <Card cardStyle="overlay" imageUrl={cardImg02} />
        <Card cardStyle="overlay" imageUrl={cardImg01} />
        <Card cardStyle="overlay" imageUrl={cardImg02} />
        <Card cardStyle="overlay" imageUrl={cardImg03} />
        <Card cardStyle="overlay" imageUrl={cardImg04} />
      </RowContainer>

      <RowContainer>
        <Card
          cardStyle="overlay"
          playIcon
          imageUrl={cardImg02}
          type="playlist"
          hover
        />
        <Card
          cardStyle="overlay"
          playIcon
          imageUrl={cardImg01}
          type="playlist"
          hover
        />
        <Card
          cardStyle="normal"
          playIcon
          imageUrl={cardImg04}
          type="playlist-def"
          hover
        />

        <Card
          explictContent
          type="playlist-def"
          cardStyle="normal"
          imageUrl={cardImg01}
          playIcon
          hover
          icon={
            <div className="card__icon card__icon--left">
              <Icon className="icon" name="headphone" size={16} />
              <span className="icon--meta text--tiny">234</span>
            </div>
          }
        />

        <Card cardStyle="overlay" imageUrl={cardImg} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg03} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg02} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg01} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg02} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg03} type="playlist" />
        <Card cardStyle="overlay" imageUrl={cardImg04} type="playlist" />
      </RowContainer>

      <RowContainer>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </RowContainer>
    </>
  );
}

export default Home;

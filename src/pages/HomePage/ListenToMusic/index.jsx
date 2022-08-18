import React from "react";

import Heading from "../../../components/Heading";
import Button from "../../../components/Button";

import img_01 from "../../../assets/listen-to-music_01.png";
import img_02 from "../../../assets/listen-to-music_02.png";

import big_img from "../../../assets/big_img.png";

function ListenToMusic() {
  return (
    <section className="listen-xperience">
      <section className="listen-to-music__section">
        <div className="container">
          <Heading size={2}>Listen to music everywhere & anywhere</Heading>
          <p>
            Want to listen to music on the go? HafrikPlay is the best option for
            you to listen to African Talents for free.
          </p>
        </div>

        <div className="listen-to-music__imgs">
          <img src={img_01} alt="Guy listening to music" />
          <img src={img_02} alt="Girl listening to music" />
        </div>
      </section>

      <section className="personalized-xperience__section">
        <div className="personalized-xperience__caption">
          <Heading size={2}>
            <span>
              {" "}
              <span className="accent__text">Personalized</span> listening
            </span>
            Xperience
          </Heading>
        </div>

        <div className="container">
          <div className="personalized-xperience__features">
            <div className="personalized-xperience__feature">
              <Heading size={4}>Create playlist</Heading>
              <p>
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <Button className="btn btn__dark">Sign up for free</Button>
            </div>
            <div className="personalized-xperience__feature">
              <Heading size={4}>Upload your own music</Heading>
              <p>
                Share in a constantly expanding mix of african music from
                emerging and major artists around the world.
              </p>
              <Button className="btn btn__dark">Share your sound</Button>
            </div>
          </div>
        </div>
      </section>

      <img
        className="listen-xperience__img"
        src={big_img}
        alt="Boy enjoying music"
      />
    </section>
  );
}

export default ListenToMusic;

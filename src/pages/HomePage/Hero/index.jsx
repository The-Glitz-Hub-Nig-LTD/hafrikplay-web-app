import React from "react";

import Navigation from "../../../components/Navigation";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

function Hero() {
  return (
    <header className="header">
      <Navigation />

      <div className="header__hero">
        <div className="container">
          <Heading className="heading__display">
            Premium hub for african talents.
          </Heading>
          <p>
            Discover, stream and share in a constantly expanding mix of music.
          </p>
          <Button className="btn btn__primary">
            <Icon size={24} name={"music"} />
            <span>Play Music</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Hero;

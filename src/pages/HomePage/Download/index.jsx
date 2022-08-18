import React from "react";
import Button from "../../../components/Button";
import Heading from "../../../components/Heading";

import app_store from "../../../assets/app-store.png";
import google_play from "../../../assets/google-play.png";

function Download() {
  return (
    <section className="download__section">
      <div className="container">
        <Heading size={2}>
          Seamlessly listen to music you love. Download the Hafrikplay app for
          your Device.
        </Heading>

        <div className="download__cta">
          <Button className="btn btn__no-bg">
            <img src={app_store} alt="App Store" />
          </Button>

          <Button className="btn btn__no-bg">
            <img src={google_play} alt="Google Play" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Download;

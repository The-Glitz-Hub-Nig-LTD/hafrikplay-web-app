import React from "react";

import Hero from "./Hero";
import ListenToMusic from "./ListenToMusic";
import Download from "./Download";
import JoinCommunity from "./JoinCommunity";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <ListenToMusic />
      <Download />
      <JoinCommunity />
      <Footer />
    </>
  );
}

export default HomePage;

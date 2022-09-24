import React from "react";

import carouselImg01 from "../../assets/carousel-img-01.png";
import carouselImg02 from "../../assets/carousel-img-02.png";
import carouselImg03 from "../../assets/carousel-img-03.png";
import carouselImg04 from "../../assets/carousel-img-04.png";
import carouselImg05 from "../../assets/carousel-img-05.png";
import logo from "../../assets/logo-white.svg";

import CarouselCard from "../CarouselCard";

function TopContentCarousel() {
  return (
    <div className="top-content-carousel">
      <div className="top-carousel-group">
        <div className="top-carousel-group__item">
          <CarouselCard logo={logo} carouselImg={carouselImg01} />
        </div>
        <div className="top-carousel-group__item">
          <CarouselCard logo={logo} carouselImg={carouselImg02} />
        </div>
        <div className="top-carousel-group__item">
          <CarouselCard logo={logo} carouselImg={carouselImg03} />
        </div>
        <div className="top-carousel-group__item">
          <CarouselCard logo={logo} carouselImg={carouselImg04} />
        </div>
        <div className="top-carousel-group__item">
          <CarouselCard logo={logo} carouselImg={carouselImg05} />
        </div>
      </div>
    </div>
  );
}

export default TopContentCarousel;

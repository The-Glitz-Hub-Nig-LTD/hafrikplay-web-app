import React from "react";

function CarouselCard({ logo, carouselImg }) {
  return (
    <div className="top-carousel-card">
      <div className="top-carousel-wrapper">
        <div className="top-carousel-container">
          <div className="top-carousel-card__logo">
            <img src={logo} alt={"Logo"} />
          </div>
          <div className="top-carousel-card__img">
            <img src={carouselImg} alt="Carousel Img" />
          </div>
          <div className="top-carousel-card__content">
            <span className="track-title">
              Bloody Samaritan (feat. Sun-El Musican)
            </span>
            <span className="track-artist">
              <span className="text-explict">E</span> Ayra Starr, Sun-El Musican
            </span>
            <span className="track-origin">PLAYING FROM: Hafrikplay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;

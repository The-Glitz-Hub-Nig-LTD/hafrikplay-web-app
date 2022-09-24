import React, { useEffect, useRef } from "react";

import thumbnail from "../../../assets/track-thumbnail.png";
import Icon from "../../../components/Icon";
import AudioPlayer from "../AudioPlayer";
import Slider from "@mui/material/Slider";

export const toggleActiveState = (e) => {
  const elem = e.target.closest(".control__icon");
  console.log(elem);

  if (elem) elem.classList.toggle("control__icon--active");
};

function Controls() {
  const controlContainerRef = useRef();

  const addToFavourites = (e) => {
    toggleActiveState(e);
  };

  useEffect(() => {
    // controlContainerRef.current.addEventListener("click", (e) => {
    //   const icon = e.target.closest(".control__icon");
    //   if (icon.classList.contains("control__icon--active")) {
    //     icon.classList.add("control__icon--active");
    //     console.log(icon);
    //   }
    // });
  }, []);

  return (
    <div className="music-player__controls">
      {/* Current song */}
      <div className="control__container" ref={controlContainerRef}>
        <div className="control__group">
          <div className="card card--1 track--playing">
            <div className="card__img track--img">
              <img src={thumbnail} alt="" />
            </div>
            <div className="card__details track--details">
              <span className="track--title">Sax Dance</span>
              <span className="track--artist">Tumisho, Dj Manzo sax</span>
            </div>
          </div>

          <Icon
            className={`icon control__icon`}
            name="heart-outline"
            size={20}
            onClick={(e) => addToFavourites(e)}
          />
        </div>

        <div className="control__group">
          <AudioPlayer />
        </div>

        <div className="control__group">
          <Icon className="icon control__icon" name="note-square" size={20} />

          <div className="control__volume">
            <Icon className="icon" name="volume-low" size={20} />
            <Slider
              size="small"
              defaultValue={0}
              aria-label="Small"
              valueLabelDisplay="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;

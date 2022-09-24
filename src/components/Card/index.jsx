import React from "react";
import Icon from "../Icon";

function Card({
  imageUrl,
  type,
  playIcon,
  cardStyle,
  explictContent,
  icon,
  hover,
}) {
  return (
    <div
      className={`card${type ? ` card--${type}` : ""}${
        hover ? " card--is-hovered" : ""
      }`}
    >
      <div className="card__img">
        <img src={imageUrl} alt="Cover art thumbnail" />
      </div>

      <div
        className={`card__content card__content--${cardStyle ? cardStyle : ""}`}
      >
        {playIcon && (
          <div className="play-box">
            <Icon className="icon__dark" name="play" size={16} />
          </div>
        )}
        <div className="text--group">
          <span className="text--bold">Wake me up</span>
          <span className="text--tiny">Mira Arstra</span>
        </div>

        {explictContent && <span className="text--explict">E</span>}
      </div>

      {icon}
    </div>
  );
}

export default Card;

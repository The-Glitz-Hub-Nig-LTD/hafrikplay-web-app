import React from "react";
import cardImg from "../../assets/card-img.png";
import Icon from "../Icon";

function Card({ type, playIcon, cardStyle, explictContent, icon }) {
  return (
    <div className={`card card-squared card-squared--${type ? type : ""}`}>
      <div className="card__img">
        <img src={cardImg} alt="Cover art thumbnail" />
      </div>

      <div className={`card__${cardStyle ? cardStyle : ""}`}>
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

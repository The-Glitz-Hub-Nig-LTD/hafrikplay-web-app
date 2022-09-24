import React from "react";

import profile_card_img from "../../assets/profile-card-img.png";

function ProfileCard() {
  return (
    <div className="card card--profile">
      <div className="card__img--profile">
        <img src={profile_card_img} alt="Profile card img" />
      </div>

      <div className="card__details--profile">
        <div className="text--group">
          <span className="text--bold">Wake me up</span>
          <span className="text--tiny">Mira Arstra</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

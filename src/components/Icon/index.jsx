import React from "react";

import spriteSvg from "../../assets/sprite.svg";

function Icon({ size, name, className }) {
  return (
    <svg className={className} width={size} height={size}>
      <use xlinkHref={`${spriteSvg}#${name}`} />
    </svg>
  );
}

export default Icon;

import React from "react";

import spriteSvg from "../../assets/sprite.svg";

const Icon = React.forwardRef(({ size, name, className }, ref) => {
  return (
    <svg className={className} width={size} height={size} ref={ref}>
      <use xlinkHref={`${spriteSvg}#${name}`} />
    </svg>
  );
});

export default Icon;

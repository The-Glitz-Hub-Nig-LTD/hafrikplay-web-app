import React from "react";

import Card from "../../../components/Card";
import RowContainer from "../../../Layout/RowContainer";

import cardImg from "../../../assets/card-img.png";
import cardImg01 from "../../../assets/card-img-01.png";
import cardImg02 from "../../../assets/card-img-02.png";
import cardImg03 from "../../../assets/card-img-03.png";
import cardImg04 from "../../../assets/card-img-04.png";

function Trending() {
  return (
    <>
      <RowContainer>
        <Card cardStyle="overlay" hover playIcon imageUrl={cardImg01} />
        <Card cardStyle="overlay" hover playIcon imageUrl={cardImg02} />
        <Card cardStyle="overlay" hover playIcon imageUrl={cardImg03} />
      </RowContainer>
    </>
  );
}

export default Trending;

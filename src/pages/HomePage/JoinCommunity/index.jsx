import React from "react";

import Heading from "../../../components/Heading";
import Button from "../../../components/Button";

function JoinCommunity() {
  return (
    <section className="join-community">
      <div className="container">
        <Heading size={2}>Promote african music </Heading>
        <p>
          Share in a constantly expanding mix of african music from emerging and
          major artists around the world.
        </p>
        <Button className="btn btn__primary">Join Community</Button>
      </div>
    </section>
  );
}

export default JoinCommunity;

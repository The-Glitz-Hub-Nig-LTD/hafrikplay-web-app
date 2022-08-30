import React from "react";

import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Heading from "../../../components/Heading";
import Navigation from "../../../components/Navigation";

function Success() {
  return (
    <div className="success">
      <Navigation />

      <div className="container">
        <div className="success__caption">
          <Heading size={4}>Password Reset Successful</Heading>
          <p>
            You password has been reset successfully. Click on continue below to
            login magically.
          </p>
        </div>

        <div className="check-email__open">
          <Button type="submit" className="btn btn__secondary btn__full-width">
            Continue
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Success;

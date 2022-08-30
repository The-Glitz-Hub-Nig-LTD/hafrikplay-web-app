import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Heading from "../../../components/Heading";
import Navigation from "../../../components/Navigation";

function CheckEmail() {
  const [email, setEmail] = useState();

  const onSubmit = (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="check-email">
      <Navigation />

      <div className="container">
        <div className="check-email__caption">
          <Heading size={4}>Check your email</Heading>
          <p>
            Please check your email. We’ve sent a verification link has been
            sent to{" "}
            <span className="accent__text">
              {email || "kmbagwu12@gmail.com"}
            </span>
          </p>
        </div>

        <div className="check-email__open">
          <Button type="submit" className="btn btn__secondary btn__full-width">
            Open email app
          </Button>

          <p className="center__text">
            Didn’t receive any email.{" "}
            <Link to="#">
              <strong className="accent__text"> Resend email</strong>
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckEmail;

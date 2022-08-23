import React from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Heading from "../../../components/Heading";
import InputField from "../../../components/InputField";
import Navigation from "../../../components/Navigation";

function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const onSubmit = (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="forgot-password">
      <Navigation />

      <div className="container">
        <div className="forgot-password__caption">
          <Heading size={4}>Forget your Password?</Heading>
          <p>No worries, we will send you reset instructions.</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            touched,
            errors,
            setFieldTouched,
          }) => (
            <form className="form form__signup" onSubmit={handleSubmit}>
              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="jade@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={() => setFieldTouched("email")}
                visible={touched.email?.toString()}
                errormessage={errors.email}
              />

              <Button
                type="submit"
                className="btn btn__secondary btn__full-width"
              >
                Continue
              </Button>

              <p className="center__text">
                Don't have an account?{" "}
                <Link to="/signup">
                  <strong className="accent__text">Sign Up</strong>
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>

      <Footer />
    </div>
  );
}

export default ForgotPassword;

import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../../../components/Button";
import Heading from "../../../components/Heading";
import InputField from "../../../components/InputField";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

function ResetPassword() {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="reset-password">
      <Navigation />

      <div className="container">
        <div className="reset-password__caption">
          <Heading size={4}>Reset Password</Heading>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.{" "}
          </p>
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
                type="password"
                name="newPassword"
                label="New Password"
                placeholder="********"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={() => setFieldTouched("newPassword")}
                visible={touched.newPassword?.toString()}
                errormessage={errors.newPassword}
              />

              <InputField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="********"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={() => setFieldTouched("confirmPassword")}
                visible={touched.confirmPassword?.toString()}
                errormessage={errors.confirmPassword}
              />

              <Button
                type="submit"
                className="btn btn__secondary btn__full-width"
              >
                Continue
              </Button>

              <p>
                Back to{" "}
                <Link to="/login">
                  <strong className="accent__text">Login</strong>
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

export default ResetPassword;

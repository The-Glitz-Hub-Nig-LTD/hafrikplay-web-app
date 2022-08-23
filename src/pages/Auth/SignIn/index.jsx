import React from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import Heading from "../../../components/Heading";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import InputField from "../../../components/InputField";

function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="signin__container">
      <Navigation />

      <div className="container">
        <div className="signin__caption">
          <Heading size={3}>Login to Hafrikplay</Heading>
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
              <Button className="btn btn__primary btn__full-width">
                <Icon size={24} name={"google-dark"} />
                <span>Continue with Google</span>
              </Button>

              <Button className="btn btn__primary btn__full-width">
                <Icon size={24} name={"facebook-dark"} />
                <span>Continue with Facebook</span>
              </Button>

              <Button className="btn btn__primary btn__full-width">
                <Icon size={24} name={"apple-dark"} />
                <span>Continue with Apple</span>
              </Button>

              <p className="center__text" style={{ fontWeight: 600 }}>
                or
              </p>

              <p className="center__text" style={{ fontWeight: 600 }}>
                Continue with Email
              </p>

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

              <InputField
                type="password"
                name="password"
                label="Password"
                placeholder="********"
                value={values.password}
                onChange={handleChange}
                onBlur={() => setFieldTouched("password")}
                visible={touched.password?.toString()}
                errormessage={errors.password}
              />

              <Link className="signin__forgot" to={"/password-reset"}>
                Forgot Password
              </Link>

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

export default SignIn;

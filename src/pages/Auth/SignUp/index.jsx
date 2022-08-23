import React from "react";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import Navigation from "../../../components/Navigation";
import Heading from "../../../components/Heading";
import ErrorText from "../../../components/ErrorText";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import Footer from "../../../components/Footer";

import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import linkedin from "../../../assets/linkedin.svg";

function SignUp() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    terms: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    terms: Yup.boolean().isTrue().required(),
  });

  const onSubmit = (values, { resetForm }, onSubmitProps) => {};

  return (
    <div className="signup__container">
      <Navigation />

      <div className="container">
        <div className="signup__caption">
          <Heading size={3}>Start listening for free by signing up.</Heading>
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
                <span>Sign Up with Google</span>
              </Button>

              <Button className="btn btn__primary btn__full-width">
                <Icon size={24} name={"facebook-dark"} />
                <span>Sign Up with Facebook</span>
              </Button>

              <Button className="btn btn__primary btn__full-width">
                <Icon size={24} name={"apple-dark"} />
                <span>Sign Up with Apple</span>
              </Button>

              <p className="center__text" style={{ fontWeight: 600 }}>
                or
              </p>

              <p className="center__text" style={{ fontWeight: 600 }}>
                Sign Up with Email
              </p>

              <InputField
                type="text"
                name="username"
                label="Username"
                placeholder="Jadee"
                value={values.username}
                onChange={handleChange}
                onBlur={() => setFieldTouched("username")}
                visible={touched.username?.toString()}
                errormessage={errors.username}
              />

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

              <div className="signup__terms">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("terms")}
                  visible={touched.terms?.toString()}
                  errormessage={errors.terms}
                />
                <label htmlFor="terms">
                  By clicking on sign-up, you agree to HafrikPlay's Terms and
                  Conditions of Use. To learn more about how HafrikPlay
                  collects, uses, shares and protects your personal data, please
                  see HafrikPlay's Privacy Policy.
                </label>
              </div>

              <Button
                type="submit"
                className="btn btn__secondary btn__full-width"
              >
                Continue
              </Button>

              <p className="center__text">
                Already have an account?{" "}
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

export default SignUp;

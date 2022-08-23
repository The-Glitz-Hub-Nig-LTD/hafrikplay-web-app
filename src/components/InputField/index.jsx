import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

function InputField({ label, name, errormessage, visible, ...rest }) {
  return (
    <fieldset
      className={`form__inputfield ${visible && errormessage ? "error" : ""}`}
    >
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={ErrorText} name={name} />
    </fieldset>
  );
}

export default InputField;

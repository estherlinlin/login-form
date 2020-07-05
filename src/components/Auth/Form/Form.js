import React, { useState } from "react";
import "./Form.scss";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { GoMail } from "react-icons/go";
import { RiLock2Line } from "react-icons/ri";
import {
  updateObject,
  checkIsValid,
  checkCommonSubStr,
} from "../../../shared/utils";

const Form = () => {
  const [loginForm, setForm] = useState({
    email: {
      value: "",
      isValid: false,
      Icon: <GoMail className="input-icon" />,
      validation: {
        required: true,
        minLength: 6,
        isEmail: true,
      },
      id: "email",
      touched: false,
    },
    password: {
      value: "",
      isValid: false,
      validation: {
        required: true,
        minLength: 6,
      },
      Icon: <RiLock2Line className="input-icon" />,
      id: "password",
      touched: false,
    },
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event, controlName) => {
    const errorText = {};
    const { isValid, error } = checkIsValid(
      event.target.value,
      loginForm[controlName].validation
    );
    console.log(error);

    const updatedControls = updateObject(loginForm, {
      [controlName]: updateObject(loginForm[controlName], {
        value: event.target.value,
        isValid: isValid,
        touched: true,
      }),
    });

    errorText[controlName] = error;
    setForm(updatedControls);
    setError(errorText);
  };

  const submitHandler = (event) => {
    console.log("login");
    event.preventDefault();
    const error = {};
    if (checkCommonSubStr(loginForm.email.value, loginForm.password.value, 6)) {
      // const updateError = {
      //   ...loginForm,
      //   ...{
      //     password: {
      //       ...loginForm["password"],
      //       ...{ error: "Invalid Password" },
      //     },
      //   },
      // };
      error.password = "More than 6 letters is repeated in account name";
    }
    setError(error);
    console.log("Login Successfully");
  };

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <Input
            elementType="input"
            type="email"
            value={loginForm.email.value}
            label="Email"
            placeholder="Email"
            minLength={loginForm.email.validation.minLength}
            required={loginForm.email.validation.required}
            Icon={loginForm.email.Icon}
            isValid={loginForm.email.isValid}
            id="email"
            error={error.email}
            changed={(event) => inputChangeHandler(event, loginForm.email.id)}
          />
        </div>
        <div className="form-group">
          <Input
            elementType="input"
            type="password"
            value={loginForm.password.value}
            label="Password"
            placeholder="Password"
            minLength={loginForm.password.validation.minLength}
            required={loginForm.password.validation.required}
            Icon={loginForm.password.Icon}
            isValid={loginForm.password.isValid}
            id="password"
            error={error.password}
            changed={(event) =>
              inputChangeHandler(event, loginForm.password.id)
            }
          />
          <div className="forgot-hint">
            <a href="#forgotPassword" className="hint-link">
              Forgot?
            </a>
          </div>
        </div>
        <div className="form-footer">
          <div className="signup-hint">
            <span className="hint-text">
              No account?{" "}
              <a href="#signup" className="hint-link">
                Signup
              </a>
            </span>
          </div>
          <Button className="btn btn-primary" clicked={submitHandler}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;

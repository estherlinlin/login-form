import React, { useState } from "react";
import "./Form.scss";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Form = () => {
  const [formValue, updateForm] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    updateForm((formValue) => ({ ...formValue, [id]: value }));
  };

  const submitHandler = () => {}

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <Input
            elementType="input"
            type="email"
            value={formValue.email}
            label="Email"
            placeholder="Email"
            // icon={emailIcon}
            // invalid={!formElement.config.valid}
            id="email"
            // shouldValidate={formElement.config.validation}
            // touched={formElement.config.touched}
            changed={inputChangeHandler}
          />
        </div>
        <div className="form-group">
          <Input
            elementType="input"
            type="password"
            value={formValue.password}
            label="Password"
            placeholder="Password"
            // icon={emailIcon}
            // invalid={!formElement.config.valid}
            id="password"
            // shouldValidate={formElement.config.validation}
            // touched={formElement.config.touched}
            changed={inputChangeHandler}
          />
        </div>
        <div className="form-footer">
          <div className="signup-hint">
            <span className="hint-text">No account? <a href="#signup" className="hint-link">Signup</a></span>
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

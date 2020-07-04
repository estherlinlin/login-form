import React from "react";
import "./LoginForm.scss";
import accountTypes from "../AccountTypeList/accounTypeData";
import AccountType from "../AccountType/AccountType";

const LoginForm = () => {

  return (
    <div className="container">
      <div className="u-center-text u-mb-md">
        <h2 className="heading-tertiary">Choose Account Type</h2>
      </div>


      <div className="greetings"></div>
      <div class="form"></div>
    </div>
  );
};

export default LoginForm;

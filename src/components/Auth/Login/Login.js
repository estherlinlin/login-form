import React from "react";
import "./Login.scss";
import { ReactComponent as BgImage } from "../../../assets/images/img_town_370x170@3x.svg";

import AccountTypeList from "../AccountTypeList/AccountTypeList";
import Form from "../Form/Form";
const Login = () => {
  const [selectedType, setAccountType] = React.useState("doctor");

  return (
    <div className="container">
      <div className="u-center-text u-mb-md">
        <h2 className="heading-tertiary">Choose Account Type</h2>
      </div>
      <AccountTypeList
        selectedType={selectedType}
        typeSelectHandler={setAccountType}
      />
      <div className="greetings">
        <span>
          Hello {selectedType}! <br /> Please fill out the form below to get
          started
        </span>
      </div>
      <Form />
      {/* <BgImage className="bg-img"/> */}
      {/* <div className="bg-img"></div> */}
    </div>
  );
};

export default Login;

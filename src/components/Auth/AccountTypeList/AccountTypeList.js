import React from "react";
import "./AccountTypeList.scss";

import accountTypes from "./accounTypeData";
import AccountType from "../AccountType/AccountType";

const AccountTypeList = ({ selectedType, typeSelectHandler }) => {
  return (
    <div className="account-container">
      {accountTypes.map((item) => (
        <AccountType
          key={item.name}
          {...item}
          isSelect={item.name === selectedType.name}
          onSelect={typeSelectHandler}
        />
      ))}
    </div>
  );
};

export default AccountTypeList;

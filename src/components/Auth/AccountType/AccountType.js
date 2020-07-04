import React from "react";
import "./AccountType.scss";

const AccountType = ({ name, img, isSelect, onSelect }) => {
  return (
    <div className="account-type" onClick={() => onSelect(name)}>
      <div className="account-img-box">
        {/* <accountType.img /> */}
        <img className="account-img" src={img} alt="Logo" />
      </div>
      <div className="account-text">{name}</div>
      <div className="circle">
        <div className="checkmark"></div>
      </div>
    </div>
  );
};

export default AccountType;

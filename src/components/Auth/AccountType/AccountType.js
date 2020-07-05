import React from "react";
import "./AccountType.scss";

const AccountType = ({ name, img, isSelect, onSelect }) => {
  const selectedClass = isSelect ? "selected-type" : null;

  return (
    <div
      className={`account-type ${selectedClass}`}
      onClick={() => onSelect(name)}
    >
      <div className="account-img-box">
        {/* <accountType.img /> */}
        <img className="account-img" src={img} alt="Logo" />
      </div>

      <div className="account-text">{name}</div>
      {isSelect ? (
        <div className="circle">
          <div className="checkmark"></div>
        </div>
      ) : null}
    </div>
  );
};

export default AccountType;

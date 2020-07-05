import React from "react";
import "./AccountTypeList.scss";

import accountTypes from "./accounTypeData";
import AccountType from "../AccountType/AccountType";
import doctorImg from "../../../assets/images/img_doctor_90@3x.svg";
import patientImg from "../../../assets/images/img_patient_90@3x.svg";

const AccountTypeList = ({ selectedType, typeSelectHandler }) => {
  const accountTypes = [
    { name: "doctor", img: doctorImg },
    { name: "patient", img: patientImg }
    // { name: "patient2", img: patientImg },
    // { name: "patient3", img: patientImg },
  ];

  return (
    <div className="account-container">
      {accountTypes.map((item) => (
        <AccountType
          key={item.name}
          {...item}
          isSelect={item.name === selectedType}
          onSelect={typeSelectHandler}
        />
      ))}
    </div>
  );
};

export default AccountTypeList;

import React from "react";

import classes from "./Input.scss";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="input"
          id={props.id}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.changed}
          minLength={props.minLength}
          required = {props.required}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="input"
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElement = (
        <input
          className="input"
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="input-group">
      {props.Icon}
      {inputElement}
      <label className="label">{props.label}</label>
      <small className="text-danger">{props.error}</small>
    </div>
  );
};

export default Input;

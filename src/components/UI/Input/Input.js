import React from "react";

import classes from "./Input.scss";

const Input = (props) => {
  let inputElement = null;
  //   const inputClasses = [classes.InputElement];

  //   if (props.invalid && props.shouldValidate && props.touched) {
  //     inputClasses.push(classes.Invalid);
  //   }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="input"
          //   {...props.elementConfig}
          id={props.id}
          type={props.type}
          value={props.value}
          placeholder = {props.placeholder}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="input"
          //   {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      // case "select":
      //   inputElement = (
      //     <select
      //       className="select"
      //       value={props.value}
      //       onChange={props.changed}
      //     >
      //       {props.elementConfig.options.map((option) => (
      //         <option key={option.value} value={option.value}>
      //           {option.displayValue}
      //         </option>
      //       ))}
      //     </select>
      //   );
      break;
    default:
      inputElement = (
        <input
          className="input"
          //   {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className="input-group">
      {inputElement}
      <label className="label">{props.label}</label>
    </div>
  );
};

export default Input;

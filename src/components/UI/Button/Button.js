import React from "react";
import "./Button.scss";

const button = (props) => (
  // <div className={props.className}>
  <a
    className={props.className}
    href={props.href}
    target={props.newTab && "_blank"}
    onClick={props.clicked}
  >
    {props.children}
  </a>
  // </div>
);

export default button;

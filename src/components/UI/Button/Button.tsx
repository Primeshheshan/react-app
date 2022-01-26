import * as React from "react";
import "./Button.css";

const Button: React.FunctionComponent<any> = (props) => {
  return <div className='button'>{props.children}</div>;
};

export default Button;

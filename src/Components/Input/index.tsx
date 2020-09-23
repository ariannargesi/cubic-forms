import React from "react";
import "./Input.css";

type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input: React.FC<InputProps> = (props) => {
  return (
      <input className="input" {...props}  />
  );
};

export default Input;

import React from "react";
import "./Input.css";

type InputProps = React.ComponentPropsWithoutRef<"input">;

type Validation = {
  validation?: {
    error: string;
    showError: boolean;
  };
};

const Input: React.FC<InputProps & Validation> = (props) => {

  const [isActive, toggleActive] = React.useState(false);

  return (
    <div className={"input-wrapper"}>
      <span className="error-wrapper">
        {props.validation?.showError && isActive && (
          <h5>{props.validation?.error}</h5>
        )}
      </span>
      <input className="input" {...props} onBlur={() => toggleActive(true)} />
    </div>
  );
};

export default Input;

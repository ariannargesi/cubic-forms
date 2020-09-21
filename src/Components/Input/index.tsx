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

  const [showHint, setShowHint] = React.useState(false);

  return (
    <div className={"input-wrapper"}>
      <span className="error-wrapper">
        {props.validation?.showError && showHint && (
          <h5>{props.validation?.error}</h5>
        )}
      </span>
      <input className="input" {...props} onBlur={() => setShowHint(true)} />
    </div>
  );
};

export default Input;

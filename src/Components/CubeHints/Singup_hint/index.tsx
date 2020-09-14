import React from "react";
import HintsItem, { Status } from "../HintsItem";
import { Store } from "../../../Context/CubeContext";

const SignupHints: React.FC = () => {
  const { signup } = React.useContext(Store).state;

  return (
    <div className="face face-right">
      <div>
        <div className="header">
          <p>2 incomplete</p>
        </div>
        <div className="hints-wrapper">
          <HintsItem
            title="email address"
            text="please enter a valid email address"
            status={Status.sucess}
          />
          <HintsItem
            title="Password"
            text="password must be at list 3 letter"
            status={Status.warnning}
          />
          <HintsItem
            title="Password"
            text="password are nut match"
            status={Status.sucess}
          />
        </div>
      </div>
    </div>
  );
};

export default SignupHints;

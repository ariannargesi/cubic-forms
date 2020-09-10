import React from "react";
import Login from '../Login'
import Signup from '../Singup'
import ForgetPassword from '../ForgetPassword'
import { Store } from "../../Context";

import "./Cube.css";

const Cube: React.FC = () => {
  const currentFace = React.useContext(Store).state.currentFace;

  return (
    <div className="wrapper">
      <div className={`rec-prism ${currentFace}`}>
      <Login/>
      <Signup/>
      <ForgetPassword/>
        <div className="face face-back">ff</div>
        <div className="face face-left">sadfsd</div>
        <div className="face face-bottom"></div>

      </div>
    </div>
  );
};

export default Cube;

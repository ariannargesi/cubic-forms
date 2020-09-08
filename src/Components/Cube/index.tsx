import React from "react";
import Signup from '../Signup'
import { Store } from "../../Context";

import "./Cube.css";

const Cube: React.FC = () => {
  const currentFace = React.useContext(Store).state.currentFace;

  return (
    <div className="wrapper">
      <div className={`rec-prism ${currentFace}`}>
      <Signup/>
        <div className="face face-top"></div>
        <div className="face face-back"></div>
        <div className="face face-right"></div>
        <div className="face face-left"></div>
        <div className="face face-bottom"></div>
      
      </div>
    </div>
  );
};

export default Cube;

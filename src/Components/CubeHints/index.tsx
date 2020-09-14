import React from "react";

import SingupHints from './Singup_hint'

import { Store } from "../../Context";


import "./CubeHints.css";

const CubeHints: React.FC = () => {
    const currentFace = React.useContext(Store).state.currentFace;
  
    console.log(currentFace)

  return (
    <div className="wrapper cube-hints">
      <div className={`rec-prism ${currentFace}`}>
        <SingupHints/>        
        <div className="face face-back"></div>
        <div className="face face-left"></div>
        <div className="face face-top"></div>
        <div className="face face-front"></div>
        <div className="face face-bottom"></div>
      </div>
    </div>
  );
};

export default CubeHints;

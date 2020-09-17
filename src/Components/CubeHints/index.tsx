import React from "react";

import SingupHint from './Singup_hint'
import LoginHint from './Login_hint'


import { Store } from "../../Context";


import "./CubeHints.css";

const CubeHints: React.FC = () => {
    const currentFace = React.useContext(Store).state.currentFace;
  

  return (
    <div className="wrapper cube-hints">
      <div className={`rec-prism ${currentFace}`}>
        <SingupHint/> 
        <LoginHint/>       
        <div className="face face-back"></div>
        <div className="face face-left"></div>
        <div className="face face-top"></div>
        <div className="face face-bottom"></div>
      </div>
    </div>
  );
};

export default CubeHints;

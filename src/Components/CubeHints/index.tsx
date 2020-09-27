import React from "react";

import SingupHint from './Singup_hint'
import LoginHint from './Login_hint'
import ForgetPasswordHint from './ForgetPassword_hint'
import ThanksHint from './Thanks_hint'
import { Store } from "../../Context";


import "./CubeHints.css";

const CubeHints: React.FC = () => {
    const currentFace = React.useContext(Store).state.currentFace;
  

  return (
    <div className="wrapper cube-hints">
      <div className={`rec-prism ${currentFace}`}>
        <SingupHint/> 
        <LoginHint/>       
        <ForgetPasswordHint/>
        <ThanksHint/>
        <div className="face face-left"></div>
      </div>
    </div>
  );
};

export default CubeHints;

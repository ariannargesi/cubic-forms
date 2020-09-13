import React from "react";
import { Store } from "../../Context";
import "./CubeHints.css";

const CubeHints: React.FC = () => {
    const currentFace = React.useContext(Store).state.currentFace;
  
    console.log(currentFace)

  return (
    <div className="wrapper cube-hints">
      <div className={`rec-prism ${currentFace}`}>
        <div className="face face-back"></div>
        <div className="face face-left"></div>
        <div className="face face-front"></div>
        <div className="face face-top"></div>
        <div className="face face-right"></div>
        <div className="face face-bottom"></div>
      </div>
    </div>
  );
};

export default CubeHints;

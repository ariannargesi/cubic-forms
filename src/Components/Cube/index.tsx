import React from "react";
import Login from '../Login'
import Signup from '../Singup'
import ForgetPassword from '../ForgetPassword'
import Thanks from '../Thanks'
import { Store } from "../../Context";
import Input from '../Input'
import "./Cube.css";

const Cube: React.FC = () => {
  const currentFace = React.useContext(Store).state.currentFace;
  return (
    <div className="wrapper">
      <div className={`rec-prism ${currentFace}`}>
      <Login/>
      <Signup/>
      <ForgetPassword/>
        <div className="face face-back"></div>
        <div className="face face-left"></div>
        <Thanks/>
      </div>
    </div>
  );
};

export default Cube;

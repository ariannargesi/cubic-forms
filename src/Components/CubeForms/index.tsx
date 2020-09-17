import React, { useEffect } from "react";
import Login from './Login'
import Signup from './Singup'
import ForgetPassword from './ForgetPassword'
import Thanks from './Thanks'
import { Store } from "../../Context";  
import { Store as CubeStore } from '../../Context/CubeContext'
import Input from '../Input'
import "./Cube.css";

const Cube: React.FC = () => {

  const { state, dispatch } = React.useContext(CubeStore) 
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "UPDATE_COUNTER" })
    }, 50)
    return () => clearInterval(intervalId)
  },[])

  // Detect typing here here

  useEffect(() => {
    const intervalId = setInterval(() => {
      const counter = state.typing.counter

      let isTyping 

      if(counter < 50) isTyping = true 
      else isTyping = false 
      
      const action = {
        type: "TOGGLE_IS_TYPING",
        payload: isTyping 
      }
      
      dispatch(action)

    }, 50)

    return () => clearInterval(intervalId)
  }, [])

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

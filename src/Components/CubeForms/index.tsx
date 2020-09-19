import React, { useEffect } from "react";
import Login from './Login'
import Signup from './Singup'
import ForgetPassword from './ForgetPassword'
import Thanks from './Thanks'
import { Store } from "../../Context";  
import { Store as CubeStore } from '../../Context/CubeContext'
import { counter } from '../../statics'
import Gears from '../Gears'

import "./Cube.css";

const Cube: React.FC = () => {

  const { dispatch } = React.useContext(CubeStore) 
  
  const [ state, setState ] = React.useState('he')

  React.useEffect(() => {
    setTimeout(()=>{
      setState('ads')
    },5000)
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      
    let isTyping = false
    
    if( isTyping === false && counter.value < 50 ) {
      const action = {
        type: "TOGGLE_IS_TYPING",
        payload: true  
      }
      dispatch(action)
      isTyping = true 
    }
    else{
      const action = {
        type: "TOGGLE_IS_TYPING",
        payload: false         
      }
      dispatch(action)
      isTyping = false 
    }    
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  const currentFace = React.useContext(Store).state.currentFace;
  return (
    <div className="wrapper">
      <Gears/>
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

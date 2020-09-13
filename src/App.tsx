import React from "react";
import CubeForms from './Components/CubeForms'
import  CubeHints from './Components/CubeHints'
import ButtonsGroup from './Components/ButtonsGroup'
const App: React.FC = () => {
  return (
    <>
    <ButtonsGroup/>
    <div className="cubes">
      <CubeForms/>
      <CubeHints/>
    </div>
    
    <div className="anim-circle"></div>
  
    </>
  );
};

export default App 
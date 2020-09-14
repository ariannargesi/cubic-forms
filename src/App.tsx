import React from "react";
import CubeForms from './Components/CubeForms'
import  CubeHints from './Components/CubeHints'
import ButtonsGroup from './Components/ButtonsGroup'
import CubeContextProvider from './Context/CubeContext'
const App: React.FC = () => {
  return (
    <>
    <ButtonsGroup/>
    <div className="cubes">
    <CubeContextProvider>
        <CubeForms/>
        <CubeHints/>
     </CubeContextProvider>
    </div>
    
    <div className="anim-circle"></div>
  
    </>
  );
};

export default App 

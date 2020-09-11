import React from "react";
import Cube from './Components/Cube'
import ButtonsGroup from './Components/ButtonsGroup'
const App: React.FC = () => {
  return (
    <>
    <div style={{position: "absolute", left: "10%"}}>
      <Cube/>
    </div>
    <ButtonsGroup/>
    <div className="anim-circle"></div>
    </>
  );
};

export default App 
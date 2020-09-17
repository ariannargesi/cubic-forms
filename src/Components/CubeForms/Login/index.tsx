import React from "react";
import Input from "../../Input";

import { Store, FormType } from "../../../Context/CubeContext";

import "./Login.css";

const Signup: React.FC = () => {
  const { state, toggleFocus, updateInput } = React.useContext(Store);

  const { login } = state 

  const [ email, password ] = login 


  return (
    <div className="face face-front">
      <h1>Login</h1>
      <label>Email Address</label>
      <Input
        type="email"
        value={email.value}
        onChange={(e) => updateInput(0, e.target.value, FormType.Login)}
        onFocus={() => toggleFocus(0, FormType.Login)}
        onBlurCapture={() => toggleFocus(0, FormType.Login)}
        placeholder="example@email.com"
      />
      <label> Password</label>
      <Input 
        type="password"
        value={password.value}
        onChange = { e => updateInput(1, e.target.value, FormType.Login) }
        onFocus={ () => toggleFocus(1, FormType.Login) }
        onBlurCapture={ () => toggleFocus(1,FormType.Login) }
       />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input type="checkbox" id="remember" />
        <label className="font-small ml-1 pointer" htmlFor="remember">
          {" "}
          remember me
        </label>
      </div>
      <Input type="submit" />
    </div>
  );
};

export default Signup;

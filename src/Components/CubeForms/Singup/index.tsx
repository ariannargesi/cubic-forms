import React, { useState, useEffect } from "react";
import Input from "../../Input";
import { Store, FormType } from "../../../Context/CubeContext";
// icons 
import eye from '../../../assets/eye.png'
import eyeDisable from '../../../assets/eye-disable.png'


const Signup: React.FC = () => {
  
  const [passwordFieldType, setPasswordFieldType] = useState<string>("password")
  const [inputIconUrl, setInputIconUrl] = useState<string>(eye)

  const { state, toggleFocus, updateInput} = React.useContext(Store);
  const { signup } = state;



  const togglePasswordFieldType = () => {
    setPasswordFieldType(passwordFieldType === "password" ? "email" : 'password')
    setInputIconUrl(inputIconUrl === eye ? eyeDisable : eye)

  }

  return (
    <div className="face face-right">
      <form action="">
        <div className="d-flex">
          <h1>Sing up</h1>
          <a href="#">Log in</a>
        </div>
        <label>Email address</label>
        <Input
          type="email"
          value={signup[0].value}
          onChange={e => updateInput(0, e.target.value, FormType.Signup) }
          placeholder="example@emial.com"
          onFocus={() => toggleFocus(0, FormType.Signup)}
          onBlurCapture={() => toggleFocus(0, FormType.Signup)}
        />
        <label>Password</label>
        <img src={inputIconUrl} id="password-field-icon" alt="" onClick={() => togglePasswordFieldType()} />
        <Input
          type={passwordFieldType}
          value={signup[1].value}
          onChange={e => updateInput(1, e.target.value, FormType.Signup)}
          onFocus={() =>  toggleFocus(1, FormType.Signup)}
          onBlurCapture={() =>  toggleFocus(1, FormType.Signup)}
        />
        <label>Confirm password</label>
        <Input
          type="password"
          onFocus={() =>  toggleFocus(2, FormType.Signup)}
          onBlurCapture={() =>  toggleFocus(2, FormType.Signup)}
          value={signup[2].value}
          onChange={e => updateInput(2, e.target.value, FormType.Signup)}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input type="checkbox" id="terms" />
          <label className="font-small ml-1 pointer" htmlFor="terms">
            i agree with the <a href="#">terms of service</a>
          </label>
        </div>
        <Input type="submit" />
      </form>
    </div>
  );
};

export default Signup;

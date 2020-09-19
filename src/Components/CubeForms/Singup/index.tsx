import React, { useState, useEffect, FormEvent } from "react";
import Input from "../../Input";
import { Store as FaceStore, ActionTypes } from '../../../Context'
import { Store, FormType } from "../../../Context/CubeContext";
import { isEmail, isValidPassword } from '../../../validation'

// icons 
import eye from '../../../assets/eye.png'
import eyeDisable from '../../../assets/eye-disable.png'


const Signup: React.FC = () => {

  const [passwordFieldType, setPasswordFieldType] = useState<string>("password")
  const [inputIconUrl, setInputIconUrl] = useState<string>(eye)

  const { state, toggleFocus, updateInput } = React.useContext(Store);
  const { signup } = state;

  const [ email, password, confirm ] = signup 
  const { dispatch } = React.useContext(FaceStore) 

  const submitIsDisable  = !(isValidPassword(password.value) && confirm.value === password.value)


  const togglePasswordFieldType = () => {
    setPasswordFieldType(passwordFieldType === "password" ? "email" : 'password')
    setInputIconUrl(inputIconUrl === eye ? eyeDisable : eye)

  }

  const handleSubmit = ( e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch({
      type: ActionTypes.UpdateFace,
      payload: 'show-bottom' 
  })
  };

  return (
    <div className="face face-right">
      <form action="" onSubmit={(e) => handleSubmit(e)} >
        <div className="d-flex">
          <h1>Sing up</h1>
          <a href="#">Log in</a>
        </div>
        <label>Email address</label>
        <Input
          type="email"
          value={signup[0].value}
          onChange={e => updateInput(0, e.target.value, FormType.Signup)}
          placeholder="example@emial.com"
          onFocus={() => toggleFocus(0, FormType.Signup)}
          onBlurCapture={() => toggleFocus(0, FormType.Signup)}
          required
        />
        <label>Password</label>
        <img src={inputIconUrl} id="password-field-icon" alt="" onClick={() => togglePasswordFieldType()} />
        <Input
          type={passwordFieldType}
          value={signup[1].value}
          onChange={e => updateInput(1, e.target.value, FormType.Signup)}
          onFocus={() => toggleFocus(1, FormType.Signup)}
          onBlurCapture={() => toggleFocus(1, FormType.Signup)}
          required
        />
        <label>Confirm password</label>
        <Input
          type="password"
          onFocus={() => toggleFocus(2, FormType.Signup)}
          onBlurCapture={() => toggleFocus(2, FormType.Signup)}
          value={signup[2].value}
          onChange={e => updateInput(2, e.target.value, FormType.Signup)}
          required
        />

        <Input type="submit" style={{ marginTop: '2rem' }}  disabled={ submitIsDisable } />
      </form>
    </div>
  );
};

export default Signup;

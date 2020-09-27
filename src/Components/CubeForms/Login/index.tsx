import React from "react";
import Input from "../../Input";
import { isValidPassword } from '../../../validation'
import { Store as FaceStore, ActionTypes } from '../../../Context'
import { Store, FormType } from "../../../Context/CubeContext";

import "./Login.css";

const Signup: React.FC = () => {
  const { state, toggleFocus, updateInput } = React.useContext(Store);

  const { dispatch } = React.useContext(FaceStore)

  const { login } = state

  const [email, password] = login

  const submitIsDisable = !(isValidPassword(password.value))



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch({
      type: ActionTypes.UpdateFace,
      payload: 'show-bottom'
    })
  }

  return (
    <div className="face face-front">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex">
          <h1>Login</h1>
          <a href="#" onClick={ () => dispatch({ type: "UPDATE_FACE", payload: "show-top" }) } > <line style={{color: 'black'}}>|</line> Sign up</a>
        </div>
          <label>Email Address</label>
          <Input
            type="email"
            value={email.value}
            onChange={(e) => updateInput(0, e.target.value, FormType.Login)}
            onFocus={() => toggleFocus(0, FormType.Login)}
            onBlurCapture={() => toggleFocus(0, FormType.Login)}
            placeholder="example@email.com"
            required
          />
          <div className="d-flex">
            <label> Password</label>
            <a href="#" onClick={ () => dispatch({ type: "UPDATE_FACE", payload: "show-left" })  } >Forget Password</a>
          </div>
          <Input
            type="password"
            value={password.value}
            onChange={e => updateInput(1, e.target.value, FormType.Login)}
            onFocus={() => toggleFocus(1, FormType.Login)}
            onBlurCapture={() => toggleFocus(1, FormType.Login)}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input type="checkbox" id="remember" />
            <label className="font-small ml-1 pointer" htmlFor="remember">
              {" "}
          remember me
        </label>
          </div>
          <Input type="submit" style={{ marginTop: '2rem' }} disabled={submitIsDisable} />
     
      </form>

    </div>
  );
};

export default Signup;

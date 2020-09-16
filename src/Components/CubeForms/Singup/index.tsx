import React, { useState } from "react";
import Input from "../../Input";
import { Store, StateEnum } from "../../../Context/CubeContext";

// icons 
import eye from '../../../assets/eye.png'
import eyeDisable from '../../../assets/eye-disable.png'


const Signup: React.FC = () => {

  const [ passwordFieldType, setPasswordFieldType ]  = useState<string>("password")
  const [ inputIconUrl, setInputIconUrl  ] = useState<string>(eye)
  const { state, dispatch } = React.useContext(Store);
  const { signup } = state;

  const toggleFocues = (index: number): void => {
    const action = {
      type: "TOGGLE_SIGNUP_ITEM_FOCUS",
      payload: index,
    };
    dispatch(action);
  };
   
  const updateInput = (index: number, value: any) => {
    const action = {
      type: "UPDATE_SIGNUP_INPUT_VALUE",
      payload: {
        index,
        value,
      },
    };
    dispatch(action)
  };

  const togglePasswordFieldType = () => {
    setPasswordFieldType( passwordFieldType === "password" ?  "email" : 'password'  ) 
    setInputIconUrl( inputIconUrl === eye ? eyeDisable : eye )

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
          type="eamil"
          value={ signup[0].value }
          onChange={ e => updateInput(0, e.target.value) }  
          placeholder="example@emial.com"
          onFocus={() => toggleFocues(0)}
          onBlurCapture={() => toggleFocues(0)}
        />
        <label>Password</label>
        <img src={inputIconUrl} id="password-field-icon" alt="" onClick={ () => togglePasswordFieldType() }  />
        <Input
          type={passwordFieldType}
          value={ signup[1].value }
          onChange={ e => updateInput(1, e.target.value) }
          onFocus={() => toggleFocues(1)}
          onBlurCapture={() => toggleFocues(1)}
        />
        <label>Confirm password</label>
        <Input
          type="password"
          onFocus={() => toggleFocues(2)}
          onBlurCapture={() => toggleFocues(2)}
          value={ signup[2].value }
          onChange={ e => updateInput(2, e.target.value) }
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

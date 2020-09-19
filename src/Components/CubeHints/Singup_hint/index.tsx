import React from "react";
import Hint from "../HintsItem";
import { Store } from "../../../Context/CubeContext";
import { isEmail, isValidPassword } from '../../../validation'


const SignupHints: React.FC = () => {
  const { signup } = React.useContext(Store).state;   
  const [ email, password, confirm ] = signup 


  return (
    <div className="face face-right">
      <h1>Signup Hint</h1>
        <div className="hints-wrapper">
          <Hint
            isValid={ isEmail(email.value.trim()) }
            errorHint={"Please enter a valid email address"}
            successHint={"Email address is valid"}
            { ...email }
          />
          <Hint
            isValid={ isValidPassword(password.value) }
            errorHint="Password must be at least 7 character"
            successHint="Password is valid"
            { ...password }
          />
          <Hint
            isValid={ password.value === confirm.value && isValidPassword(password.value) }
            errorHint="Passwords are not match"
            successHint="Passwords are match"
              { ...confirm }
          />
      </div>
    </div>
  );
};

export default SignupHints;

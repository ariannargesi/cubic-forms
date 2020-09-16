import React from "react";
import Hint from "../HintsItem";
import { Store, HintType } from "../../../Context/CubeContext";
import validator from 'validator'


const SignupHints: React.FC = () => {
  const { signup } = React.useContext(Store).state;   
  const [ email, password, confirm ] = signup 

  const passwordIsValid = validator.isLength(password.value, {
    min: 7,
    max: 32
  })

  return (
    <div className="face face-right">
      <div>
        <div className="header">
          <p>2 incomplete</p>
        </div>
        <div className="hints-wrapper">
          <Hint
            isValid={ validator.isEmail(email.value.trim()) }
            errorHint={"Please enter a valid email address"}
            successHint={""}
            { ...email }
          />
          <Hint
            isValid={passwordIsValid}
            errorHint="Password must be at least 7 character"
            successHint=""
            { ...password }
          />
          <Hint
            isValid={ password.value === confirm.value && passwordIsValid }
            errorHint="Password are not match"
            successHint=""
              { ...confirm }
          />
        </div>
      </div>
    </div>
  );
};

export default SignupHints;

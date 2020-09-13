import React, { useState } from "react";
import Input from "../../Input";

const Signup: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [confirmValue, setConfirmValue] = useState<string>("");
  const [ termValue, setTermValue ] = useState<boolean>(false)
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
          value={emailValue}
          onChange={(e)=> setEmailValue(e.target.value)}
          placeholder="example@emial.com"
        />
        <label>Password</label>
        <Input
            type="password" 
            value={passwordValue}
            onChange={e => setPasswordValue(e.target.value)}
        />
        <label>Confirm password</label>
        <Input
            type="password" 
            value={confirmValue}
            onChange={ e => setConfirmValue(e.target.value) }

        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input type="checkbox" id="terms" checked={termValue} onChange={() => setTermValue(!termValue)} />
          <label className="font-small ml-1 pointer" htmlFor="terms">
            i agree with the <a href="#">terms of service</a>
          </label>
        </div>
        <Input type="submit"/>
      </form>
    </div>
  );
};

export default Signup;

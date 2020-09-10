import React, { FormEvent } from "react";
import Input from "../Input";
import googleLogo from '../../assets/google.png'

import './Login.css'

const Signup: React.FC = () => {
  const [nameValue, setNameValue] = React.useState<string>("");
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const [confirmValue, setConfirmValue] = React.useState<string>("");

  // React.useEffect(() => {
  //   console.log("re-render");
  // });

  // const submitHandler = (e: FormEvent): void => {
  //   e.preventDefault();
  // };

  return (
    <div className="face face-front">
      <h1>Login</h1>
      <label>Email Address</label>
      <Input placeholder="example@email.com"/>
      <label> Password</label>
      <Input type="password"/>
      <div style={{display: 'flex', alignItems: 'center'}}>
          <Input type="checkbox" id="remember"/>
          <label className="font-small ml-1 pointer" htmlFor="remember"> remember me</label>
      </div>
      <Input type="submit"/>
        {/* <button className="login-with-google">
          <span> <img src={googleLogo} alt=""/> </span>
        </button> */}
    </div>
  );
};

export default Signup;

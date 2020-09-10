import React, { FormEvent } from "react";
import Input from "../Input";
import { InputType } from "zlib";
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
      <Input type="submit"/>
    </div>
  );
};

export default Signup;

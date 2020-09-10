import React, { FormEvent } from "react";
import Input from "../Input";
import { InputType } from "zlib";
const Signup: React.FC = () => {
  const [nameValue, setNameValue] = React.useState<string>("");
  const [emailValue, setEmailValue] = React.useState<string>("");
  const [passwordValue, setPasswordValue] = React.useState<string>("");
  const [confirmValue, setConfirmValue] = React.useState<string>("");

  React.useEffect(() => {
    console.log("re-render");
  });

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="face face-front">
      <h1 style={{ display: "block", textAlign: "center" }}>Singup</h1>
      <form action="" onSubmit={submitHandler}>
        <Input
          placeholder="Full name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <Input 
            placeholder="Email Address or phone number" 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
        />
        <Input placeholder="Password" value={passwordValue} onChange={e => setPasswordValue(e.target.value)} />
        <Input placeholder="Confirm Password" value={confirmValue} onChange={e => setConfirmValue(e.target.value)} />
        <Input type="submit" />
      </form>
    </div>
  );
};

export default Signup;

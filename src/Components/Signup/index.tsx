import React from "react";
import Input from "../Input";
const Signup: React.FC = () => {
  return (
    <div className="face face-front">
      <h1>Singup</h1>
      <form action="">
        <Input placeholder="Email Address or phone number" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Input type="submit"/>
      </form>
    </div>
  );
};

export default Signup;

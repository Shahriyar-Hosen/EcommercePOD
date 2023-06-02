"use client";

import { useState } from "react";

import AuthForm from "@/components/from/AuthForm";
import { ISubmitForm } from "../login/page";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event: ISubmitForm) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <AuthForm
      submitForm={submitForm}
      title="Sign Up"
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
};

export default SignUp;
